const express = require('express')
const consign = require('consign')
const app = express()

consign()
  // Retorna uma instancia do banco de dados e seus dados de conexão
  .include('db.js')
  // Define os models dentro do sequelize (app.db)
  .then('models')
  // Depois dos models criados, faz a associação entre os modulos
  // Com os modulos devidamente associados, o sequelize criara as tabelas com 
  // As regras de relacionamento corretas
  .then('associations.js')
  // Configurações do servidor e manipulação gerais de requisições e respostas
  .then('middlewares.js') 
  // Rotas da API, uma rota por arquivo
  .then('routes')
  // Conecta com o banco e cria as tabelas (models) definidos com app.db.define
  .then('boot.js') 
  // Variavel onde os objetos retornados acima serão "penduradas"
  .into(app)
