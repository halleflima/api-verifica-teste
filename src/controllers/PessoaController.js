const Pessoas = require('../models/Pessoas')

module.exports = {
  async store(req, res, next) {
    const { nome, nivel_user, email, senha   } = req.body

    const pessoa = await Pessoas.create({
      nome,
      nivel_user,
      email,
      senha
    })

    return res.json(pessoa)
  }
}
