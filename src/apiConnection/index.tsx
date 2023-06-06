import axios from "axios"

const host = typeof location != "undefined"
    ?`http://${location.host.replace(":3000", ":8000")}`
    :""
    
    const getSales = async (page: number) => {
        const res = await axios.get(host+`/product?_page=${page}&&_limit=20`)
        return res.data
    }

export {
    getSales,
}