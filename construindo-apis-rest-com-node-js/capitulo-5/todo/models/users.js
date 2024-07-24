const { DataTypes } = require('sequelize')

module.exports = app => {
  console.log('>>> Model Users <<<')

  // Cria a tabela e define os campos, retorna uma referencia a essa tabela
  const Users = app.db.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validade: {
        notEmpty: true
      }
    }
  })

  // Retornar a representação da tabela
  return Users
}