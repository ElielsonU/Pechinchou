const jsonServer = require("json-server")

const server = jsonServer.create()
server.use(jsonServer.defaults())

const port = 8000
server.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

