# Passo a passo para criação de API básica com express

## Rotas e organização

- Instale o express via npm
- Crie um arquivo index.js
- Importe o módulo do express, defina as rotas usando app.get, execute o método
listen do app
- Crie o alias para script start, no package.json com o conteúdo 'node index.js'
- Crie uma rota simples e teste o retorno de algum dado
- Para organizar o projeto, instale o módulo consign
- Crie a pasta routes e crie um arquivo para cada end point, index.js, routes.js
- Mova as rotas que estavam no index.js root, para a pasta routes, e atualize
o index.js para usar o consign, da seguinte maneira

```js
const express = require('express')
const consign = require('consign')

const PORT = 3000 
const app = express()

consign()
  .include('routes')
  .into(app)

console.log(app)

app.listen(PORT, () => {
  console.log('todo API running')
})
```

- Crie a pasta models, a pasta models é responsavel pelas iterações do banco,
é como se fosse a classe que representa cada tabela
- Cada model (arquivo js dentro da pasta models), deve retornar um objeto, com
os métodos de manipulação e obtenção dos dados de cada tabela
- Os métodos de cada model deve retornar os dados do banco
- Crie um arquivo middlewares.js, onde conterá as configurações básicas do
servidor
- Cada middlewares é executado sempre que uma requisição é feita
- Os middlewares são responsaveis por manipular requisições e respostas e também
configurar o servidor
- Os middlewares são caracterizados pelo uso de app.use
- Crie o arquivo boot apenas para iniciar o servidor
- Atualize o index.js com as novas dependencias do consign

```js
const express = require('express')
const consign = require('consign')
const app = express()

consign()
  .include('models')
  .then('middlewares.js')
  .then('routes')
  .then('boot.js')
  .into(app)
```

## Banco de dados SQLite3 e Sequelize

- Instale o sequelize pelo npm
- instale o sqlite3 pelo npm
- Crie arquivo config.js, onde colocaremos as configurações do sequelize 
e do sqlite

```js
module.exports = {
  db: {
    database: 'todo',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'todo.sqlite',
      define: {
        underscore: true
      }
    }
  }
}
```

- Crie codigo responsavel por se conectar com o banco de dados
- O arquivo responsavel por se conectar com o banco será o db.js
- Os models são representações de cada tabela no banco e não a tabela em si
- Prepare todos os models, passe a usar o sequelize para obter/atualizar os
dados
- Quando você usar o sequelize.sync(), o sequelize cria as tabelas confirme os
modelos setados
- O nome da tabela será o nome do modelo
- Se a tabela ja existir, nao cria uma nova, retorna apenas o model existente
- Defina o relacionamento de cada tabela
- Para as associações, crie um arquivo separado, associations.js
- Implemente o crud da API
- Instale o body-parser para habilitar o express para receber requisições do 
tipo json
- 