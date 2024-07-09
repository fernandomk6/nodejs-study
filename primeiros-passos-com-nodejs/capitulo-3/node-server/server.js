const http = require('http')

const server = http.createServer((request, response) => {
    const url = request.url 
    console.log(`${url} acessada`)

    if (request.url == '/') {
        response.setHeader('Content-type', 'text/html; charset=utf-8')
        response.end('<h1>Olá Mundo!</h1>')
    }

    if (request.url == '/json') {
        response.setHeader('Content-type', 'application/json')
        const data = {
            id: 1,
            name: 'user'
        }
        response.end(JSON.stringify(data))
    }
})

server.listen(3000)
