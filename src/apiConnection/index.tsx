import axios from "axios"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import Router from "next/router"
import {v4 as uuidv4} from 'uuid'


const host = typeof location != "undefined"
    ?`http://${location.host.replace(":3000", ":8000")}`
    :"http://localhost:8000"
    
const getSales = async (page: number) => {
    
    try {
        const res = await axios.get(host+`/product?_page=${page}&&_limit=20`)
        return res.data
    } catch (e: any) {
        console.log("Erro: "+ e.message)
    }

    return []
}

const getSale = async (id: number) => {
    try {
        const res = await axios.get(host+`/product/${id}`)
        const res2 = await axios.get(host+`/product/${id}/comments`)
        res.data.commentsQ = res2.data.commentsQ

        return res.data
    }

    catch (e: any) {
        console.log("Erro: "+ e.message)
    }
}

const getComments = async (id: number, page: number) => {
    try {
        const res = await axios.get(host+`/comments?productId=${id}&_page=${page}&_limit=5`)

        return res.data
    }

    catch (e: any) {
        console.log("Erro: "+ e.message)
    }
}

const connectUser = async () => {
    try {
        const token = getCookie("token")
        const res = await axios.get(host+`/user?token=${token}`)

        const user = res.data[0]
        delete user?.password

        if (!user) {
            localStorage.removeItem("user")
            return null
        }

        const rememberMe = Number(getCookie("remember"))
        
        if (!rememberMe) {
            deleteCookie("token")
            deleteCookie("remember")           
        }

        localStorage.setItem("user", JSON.stringify(user))
        return user
    }

    catch (e: any) {
        console.log("Erro: "+ e.message)
    }
}

const login = async (email: string, password: string, rememberMe: boolean) => {
    try {
        const res = await axios.get(host+`/user?email=${email.toLocaleLowerCase()}&password=${password}`)
        const user = res.data[0]
        
        delete user.password
        localStorage.setItem("user", JSON.stringify(user))
        setCookie("remember", Number(rememberMe))
        setCookie("token", user.token)

        Router.reload()
    } 

    catch (e: any) {
        console.log("Erro: "+ e.message)
    }
}

const testemail = async (email: string) => {
    try {
        const res = await axios.get(host+`/user?email=${email}`)

        return res.data.length
    } 

    catch (e: any) {
        console.log("Erro: "+ e.message)
    }
}

const signup = async (email: string, password: string, username: string) => {
    try {
        const data = {
            username,
            email,
            password,
            token: uuidv4()
        }

        await axios.post(host+`/user`, data)

        setCookie("token", data.token)
        Router.reload()
    } 

    catch (e: any) {
        alert("Erro: "+ e.message)
    }
}

const disconnect = () => {
    deleteCookie("token")
    deleteCookie("remember")
    localStorage.removeItem("user")
    Router.reload()
}

const postComment = async (text: string, poster: string, productId: number) => {
    try {
        if (poster&&text) {
            await axios.post(host+"/comments", {text, poster, productId})

            return true
        }
    } 

    catch (e: any) {
        console.log("Erro: "+ e.message)
    }
}

export {
    getSales,
    getSale,
    getComments,
    connectUser,
    login,
    disconnect,
    postComment,
    testemail,
    signup
}