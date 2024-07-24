module.exports = app => {
  console.log('>>> Routes tasks <<<')

  // Obtem o model (representação da tabela Tasks)
  const Tasks = app.models.tasks 
  
  app.get('/tasks', async (req, res) => {
    try {
      // Método que obtem todas as tasks cadastradas
      const tasks = await Tasks.findAll()

      // Envia o resultado para o cliente em formato json (com status 200)
      res.json({ tasks })
    } catch (error) {

      // Em caso de erro, retorna erro com status 500 (erro interno do servidor)
      // Encapsula a variavel error para debug
      res.status(500).json(error)
    }
  })
}
