import axios from "axios"

const host = typeof location != "undefined"
    ?`http://${location.host.replace(":3000", ":8000")}`
    :""
    
    const getSales = async (page: number) => {
        try {
            const res = await axios.get(host+`/product?_page=${page}&&_limit=20`)
            return res.data
        } catch (e: any) {
            alert("Erro: "+ e.message)
        }

        return []
    }

    const connectUser = async (token: string) => {
        try {
            const res = await axios.post(host+"/auth/login", {token})
            return res.data.msg
        }

        catch (e: any) {
            alert("Erro: "+ e.message)
        }

    }

export {
    getSales,
    connectUser,
}