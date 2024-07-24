module.exports = app => {
  console.log('>>> Routes tasks <<<')

  // Obtem o model (representação da tabela Tasks)
  const Tasks = app.models.tasks 
  
  app.route('/tasks')
    .get(async (req, res) => {
      try {
        const tasks = await Tasks.findAll()
        res.json(tasks)
      } catch (error) {
        res.status(412).json({ msg: error.message })
      }
    })
    .post(async (req, res) => {
      try {
        const task = await Tasks.create(req.body)
        res.json(task)
      } catch (error) {
        res.status(412).json({ msg: error.message })
      }
    })

  app.route('/tasks/:id')
    .get(async (req, res) => {
      try {
        const { id } = req.params
        const where = { id }
        const task = await Tasks.findOne({ where })
        if (task) {
          res.json(task)
        } else {
          res.sendStatus(404)
        }
      } catch (error) {
        res.status(412).json({ msg: error.message })
      }
    })
    .put(async (req, res) => {
      try {
        const { id } = req.params
        const where = { id }
        await Tasks.update(req.body, { where })
        res.sendStatus(204)
      } catch (error) {
        res.status(412).json({ msg: error.message })
      }
    })
    .delete(async (req, res) => {
      try {
        const { id } = req.params
        const where = { id }
        const task = Tasks.destroy({ where })
        res.sendStatus(204)
      } catch (error) {
        res.status(412).json({ msg: error.message })
      }
    })
}
