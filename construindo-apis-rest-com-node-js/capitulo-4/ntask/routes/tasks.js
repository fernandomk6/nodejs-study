module.exports = app => {
  const Tasks = app.models.tasks

  app.route('/tasks')
    .all(app.auth.authenticate())
    .get(async (req, res) => {
      // "/tasks": Lista tarefas
      try {
        const where = { userId: req.user.id }
        const result = await Tasks.findAll({ where })
        res.json(result)
      } catch (error) {
        res.status(412).json({ message: error.message })
      }
    })
    .post(async (req, res) => {
      // "/tasks": Cadastra uma nova tarefa
      try {
        req.body.userId = req.user.id
        const result = await Tasks.create(req.body)
        res.json(result)
      } catch (error) {
        res.status(412).json({ message: error.message })
      }
    })
  
  app.route('/tasks/:id')
    .all(app.auth.authenticate())
    .get(async (req, res) => {
      // "/tasks/1": Consulta uma tarefa
      try {
        const { id } = req.params
        const where = { id, userId: req.user.id }
        const result = await Tasks.findOne({ where })
        if (result) {
          res.json(result)
        } else {
          res.sendStatus(404)
        }
      } catch (error) {
        res.status(412).json({ message: error.message })
      }
    })
    .put(async (req, res) => {
      // "/tasks/1": Atualiza uma tarefa
      try {
        const { id } = req.params
        const where = { id, userId: req.user.id }
        await Tasks.update(req.body, { where })
        res.sendStatus(204)
      } catch (error) {
        res.status(412).json({ message: error.message })
      }
    })
    .delete(async (req, res) => {
      // "/tasks/1": Exclui uma tarefa
      try {
        const { id }= req.params
        const where = { id, userId: req.user.id }
        await Tasks.destroy({ where })
        res.sendStatus(204)
      } catch (error) {
        res.status(412).json({ message: error.message })
      }
    })
}
