module.exports = app => {
  console.log('>>> Boot <<<')
  
  async function start (port) {
    try {
      // Se conecta ao banco de dados
      await app.db.authenticate()

      // Se uma tabela não existir, 
      // sequelize.sync() irá criá-la com base na definição do modelo.
      await app.db.sync()

      // Lista todas as tabelas no banco de dados
      const tables = await app.db.getQueryInterface().showAllTables()
      console.log('Tabelas no banco de dados:', tables)

      // Inicia o servidor da api
      app.listen(port, () => {
        console.log(`todo API running on port ${port}`)
      })
    } catch (error) {
      console.log('Erro de conexão com o banco de dados')
      console.error(error)
    }
  }
  
  start(app.get('port'))
}