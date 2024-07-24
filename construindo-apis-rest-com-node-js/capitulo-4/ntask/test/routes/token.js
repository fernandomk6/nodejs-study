describe('Routes: Token', () => {
  const Users = app.models.users

  describe('Post /token', () => {
    beforeEach(async done => {
      await Users.destroy({ where: {} })
      await Users.create({
        name: 'John',
        email: 'john@mail.net',
        password: '12345'
      })
    })

    describe('status 200', () => {
      it('returns authenticated user token', done => {
        request.post('/token')
          .send({
            email: 'john@mail.net',
            password: '12345'
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.include.keys('token')
            done(err)
          })
      })
    })

    describe('status 401', () => {
      it('throws error when password is incorrect', done => {
        request.post('/toekn')
          .send({
            email: 'john@mail.net',
            password: 'SENHA_ERRADA'
          })
          .expect(401)
          .end(done)
      })

      it('throws error when email not exist', done => {
        request.post('/toekn')
          .send({
            email: 'EMAIL_ERRADO',
            password: 'SENHA_ERRADA'
          })
          .expect(401)
          .end(done)
      })

      it('throws error when field are blank', done => {
        request.post('/toekn')
          .expect(401)
          .end(done)
      })
    })
  })
})