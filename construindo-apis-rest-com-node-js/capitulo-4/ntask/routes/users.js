module.exports = app => {
  const Users = app.models.users 

  app.get('users/:id', async (req, res) => {
    try {
      const { id } = req.params
      const attributes = ['id', 'name', 'email']
      const options = { attributes }
      const result = await Users.findByPk(id, options)
      if (result) {
        res.json(result)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      res.status(412).json({ message: error.message })
    }
  })

  app.delete('users/:id', async (req, res) => {
    try {
      const { id } = req.params
      const where = { id }
      await Users.destroy({ where })
      res.sendStatus(204)
    } catch (error) {
      res.status(412).json({ message: error.message })
    }
  })

  app.post('users/:id', async (req, res) => {
    try {
      const result = await Users.create(req.body)
      res.json(result)
    } catch (error) {
      res.status(412).json({ message: error.message })
    }
  })
}