
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
const data = require('./db.json')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    const acceptHeader = req.header('Accept');
    const apiVersion = acceptHeader.split(';')[1] || undefined;

    if (req.method === 'GET' && apiVersion !== undefined) {
        // const resData = data[`books-v${apiVersion}`];

        res.status(200).send('Media Type!');
    }
    else {
        // Continue to JSON Server router
        next()
    }
})

// Use default router
server.use(router)
server.listen(4000, () => {
    console.log('JSON Server is running')
})