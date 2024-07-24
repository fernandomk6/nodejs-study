module.exports = {
  db: {
    database: 'todo',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'todo.sqlite',
      define: {
        underscored: true
      }
    }
  }
}
