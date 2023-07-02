const server = require("json-server")
const fs = require("fs")

const app = server.create()

app.use(server.defaults())
app.use(server.bodyParser)

app.get("/product/:id/comments", (req, res) => {
    const db = JSON.parse(fs.readFileSync("./db.json"))
    
    const id = req.params.id

    const comments = db.comments.filter((item) => item.productId == id)

    return res.json({commentsQ: comments.length}).status(200)
}) 

app.use(server.router('./db.json'))
const port = 8000
app.listen(port, () => {
    

    console.log(`Server listening on port: ${port}`)
})