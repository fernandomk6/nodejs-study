const bodyParser = require('body-parser')
module.exports = app => {
  console.log('>>> Middlewares <<<')
  
  app.set('port', 3000)
  app.set('json spaces', 4)
  app.use(bodyParser.json())

  // Middleware (função)
  // Executada sempre que uma requisição é feita para a API
  app.use((req, res, next) => {
    // Remove a propriedade id do body para evitar que o id seja sobreescrito
    delete req.body.id
    next()
  })
}
