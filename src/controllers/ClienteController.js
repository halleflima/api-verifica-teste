const Pessoas = require('../models/Pessoas')
const Contatos = require('../models/Contatos')
const Enderecos = require('../models/Enderecos')
const Ordens = require('../models/Ordens')

module.exports = {

  async novaOrdem (req, res, next) {
    
      const { 
        nome, email, senha,  telefone, estado, cidade, 
        rua, bairro, numero, cep, end_referencia 
      } = req.body
      const ordem_status = 'aberta'
      const pessoa_nivel_user = 0
       
      const pessoa = await Pessoas.create({
        nome,
        nivel_user: pessoa_nivel_user,
        email,
        senha,
      })

      console.log(pessoa)
      const id_pessoa = pessoa.id

      const contato = await Contatos.create({
        id_pessoa,
        telefone,
      })
      

      return res.status(200).json(contato)
      
    
  }

}