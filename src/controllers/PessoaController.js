const Pessoas = require('../models/Pessoas.js');

const jwt = require('jsonwebtoken');

module.exports = {
  async store(req, res, next) {
    try {
      const { nome, nivel_user, email, senha } = req.body;

      const pessoa = await Pessoas.create({
        nome,
        nivel_user,
        email,
        senha,
      });

      pessoa.senha = undefined;

      const token = jwt.sign(
        { pessoa: pessoa.id },
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwi'
      );

      return res.json({ pessoa, token });
    } catch (error) {
      return res.json(400, error);
    }
  },

  async index(req, res, next) {
    const { idpessoa } = req.params;
    const { email, senha } = req.body;

    const pessoa = await Pessoas.findByPk(idpessoa);
    if (!pessoa) {
      return res.status(400).json({ error: 'Usuario não encontrado' });
    }
    if (pessoa.email !== email) {
      return res.status(400).json({ error: 'Nome de usuario errado!' });
    }

    const checa_senha = await pessoa.checarSenha(senha);
    if (!checa_senha) {
      return res.status(400).json({ error: 'Senha incorreta' });
    } else {
      return res.status(200).json({ msg: 'Autenticação feita!' });
    }
  },
};
