const http = require('http')

const server = http.createServer((request, response) => {
    // Obtem os headers da requisição, é chamado de headers por que são várias
    // chaves e valores
    // const headers = request.headers
    const url = request.url 

    console.log(`${url} acessada`)
    // console.log(`Header:`)
    // console.log(headers)
    
    if (request.url == '/test') {
        response.setHeader('Content-type', 'text/html; charset=utf-8')
        response.end('<h1>Olá Mundo!</h1>')
    }

    if (request.url == '/json') {

        // Seta uma chave e valor para o header
        response.setHeader('Content-type', 'application/json')

        const data = {
            id: 1,
            name: 'user'
        }

        // response.end precisa receber uma string como argumento
        response.end(JSON.stringify(data))
    }
})

server.listen(3000)
