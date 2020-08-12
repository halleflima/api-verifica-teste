const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Pessoas extends Model {
  static init(connection) {
    super.init(
      {
        nome: DataTypes.STRING,
        nivel_user: DataTypes.INTEGER,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
    this.addHook('beforeSave', async pessoas => {
      if (pessoas.senha) {
        pessoas.senha = await bcrypt.hash(pessoas.senha, 8)
      }
    })
    return this
  }
  static associate(models) {
    this.hasMany(models.Contatos,  { as:'pes_telefones' });
    this.hasMany(models.Enderecos,  { as:'pes_enderecos' });
    this.hasMany(models.Pessoas,  {foreignKey:'id', as:'pes_ordens' });
  }
  checarSenha(senha){
    return bcrypt.compare(senha, this.senha)
  } 
}

module.exports = Pessoas;
