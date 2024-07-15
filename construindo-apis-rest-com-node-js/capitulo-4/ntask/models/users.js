const bcrypt = require('bcrypt')
const { DataTypes } = require('sequelize')

module.exports = app => {
  const Users = app.db.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validade: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validade: {
        notEmpty: true
      },
      set(value) {
        const salt = bcrypt.genSaltSync()
        const password = bcrypt.hashSync(value, salt)
        this.setDataValue('password', password)
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validade: {
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

  return Users
}