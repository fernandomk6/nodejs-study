const { DataTypes } = require('sequelize')

module.exports = app => {
  console.log('>>> Model Tasks <<<')

  // Cria a tabela e define os campos, retorna uma referencia a essa tabela
  const Tasks = app.db.define('Tasks', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: true
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })

  // Retornar a representação da tabela
  return Tasks
}