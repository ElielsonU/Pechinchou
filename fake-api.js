const fs = require("fs")
const server = require("json-server")

const app = server.create()

app.use(server.defaults())
app.use(server.bodyParser)

app.post("/auth/login", (req, res) => {
    const db = JSON.parse(fs.readFileSync("./db.json"))
    const token = req.body.token

    const user = db.user.filter((item) => {{
        return item.token == token
    }})[0]

    return res.json({msg: user})
})

app.use(server.router('./db.json'))
const port = 8000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

