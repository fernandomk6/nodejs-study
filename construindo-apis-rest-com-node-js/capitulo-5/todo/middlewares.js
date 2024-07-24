module.exports = app => {
  console.log('>>> Middlewares <<<')
  
  app.set('port', 3000)
  app.set('json spaces', 4)
}
