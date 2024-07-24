const Sequelize = require('sequelize')
const config = require('./config')

let sequelize = null 

const {
  db: { database, username, password, params }
} = config

// Retorna um objeto Sequelize, que contem métodos para manipulação do banco
// Esse método é atribuido ao app no index.js por meio do consign
// Ele pode ser acessado por app.db
// app.db é uma instancia do sequelize
module.exports = () => {
  // Faz conexão com o banco apenas uma vez
  if (!sequelize) {
    sequelize = new Sequelize(
      database,
      username,
      password,
      params
    )
  }

  return sequelize
}