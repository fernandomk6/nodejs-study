module.exports = app => {
  console.log('>>> Routes index <<<')
  
  app.get('/', (req, res) => {
    res.json({ status: 'Route /' })
  })
}
