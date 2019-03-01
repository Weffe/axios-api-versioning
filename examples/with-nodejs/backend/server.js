
const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require('./db.json');
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()
const routes = require('./routes.json');

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter(routes))

server.get('/books', (req, res, next) => {
    const acceptHeader = req.header('Accept');
    const apiVersion = acceptHeader.split(';')[1] || undefined;
    const rawApiVersion = apiVersion.replace('v=', '');

    if (rawApiVersion !== undefined) {
        const resData = data[`books-v${rawApiVersion}`];

        res.status(200).send(resData);
    }
    else {
        next();
    }
})


// Use default router
server.use(router)

function startBackendServer() {
    return server.listen(4000, () => {
        console.log('JSON Server is running on port 4000.')
    })
}

module.exports = {
    startBackendServer,
}
