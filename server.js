// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const jsonServerAuth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

// /!\ Bind the router db to the app
server.db = router.db


server.use(jsonServerAuth)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
