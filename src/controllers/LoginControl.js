const Pessoas = require('../models/Pessoas.js');
const jwt = require('../services/jwt');

module.exports = {
  async criaUsuario(req, res) {
    try {
      const { nome, email, senha } = req.body;
      
      const pessoa = await Pessoas.create ({
        nome,
        nivel_user: 0,
        email,
        senha,
      });
      
      pessoa.senha = undefined;
      const token = jwt.criaToken({ pessoa: pessoa.id });
      return res.json ({ pessoa, token }); 

    } catch (error) {
      return res.json (400, error);
    }
  },

  async logar(req, res) {
      const [, hash ] = req.headers.authorization.split(' ')
      const [email, senha] = Buffer.from(hash, 'base64')
        .toString()
        .split(':')

    try {
      const pessoa  = await Pessoas.findOne({ 
        where: {
          email: email
        }
      })
      
      if (!pessoa) {
        return res.json(400, {error: 'Email invalido'})
      }

      const validaSenha = await pessoa.checarSenha(senha)
      if (!validaSenha) {
        return res.json(400, {error: 'Senha invalida'})
      }

      const token = jwt.criaToken({ pessoa: pessoa.id })
      pessoa.senha = undefined;
      res.json({pessoa, token})

    } catch (error) {
      return res.json (400, error)
    }
  },

  async autenticaRota (req, res, next) {
    const [, token] = req.headers.authorization.split(' ')
    console.log(req.headers.authorization)

    try {

      const payload = await jwt.checaToken(token)
      const pessoa = await Pessoas.findByPk(payload.pessoa)
      
      if (!pessoa) {
        return res.json(401, {error: 'Usuario invalido'})
      }

      req.auth = pessoa
      next()

    } catch (error) {
      return res.json (401, error)
    }
  },

  async listaUsuarios(rea, res) {
    try {
      const pessoas = await Pessoas.findAll()
      return res.json (pessoas)
    } catch (error) {
      return res.json (error)
    }
  },

  async me (req, res, next) {
    res.json(req.auth)
  },

};
