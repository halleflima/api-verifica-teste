const { Model, DataTypes } = require('sequelize');

class Enderecos extends Model {
  static init(connection) {
    super.init(
      {
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        rua: DataTypes.STRING,
        bairro: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        cep: DataTypes.STRING,
        end_referencia: DataTypes.STRING,
      },{
        sequelize: connection,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Pessoa,  {foreignKey:'id_pessoa', as:'pes_endereco' });
  }
}

module.exports = Enderecos;
