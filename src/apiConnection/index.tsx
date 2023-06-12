import axios from "axios"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import Router from "next/router"

const host = typeof location != "undefined"
    ?`http://${location.host.replace(":3000", ":8000")}`
    :""
    
const getSales = async (page: number) => {
    try {
        const res = await axios.get(host+`/product?_page=${page}&&_limit=20`)
        return res.data
    } catch (e: any) {
        console.log("Erro: "+ e.message)
    }

    return []
}

const connectUser = async () => {
    try {
        const token = getCookie("token")
        const res = await axios.get(host+`/user?token=${token}`)

        return res.data[0]
    }

    catch (e: any) {
        console.log("Erro: "+ e.message)
    }
}

const login = async (email: string, password: string) => {
    try {
        const res = await axios.get(host+`/user?email=${email.toLocaleLowerCase()}&password=${password}`)
        const user = res.data[0]
    
        setCookie("token", user.token)
    
        Router.reload()
    } 

    catch (e: any) {
        console.log("Erro: "+ e.message)
        
    }
}

const disconnect = () => {
    deleteCookie("token")

    Router.reload()
}

export {
    getSales,
    connectUser,
    login,
    disconnect
}