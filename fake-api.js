const server = require("json-server")

const app = server.create()

app.use(server.defaults())
app.use(server.bodyParser)



app.use(server.router('./db.json'))
const port = 8000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

