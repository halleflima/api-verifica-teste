const { Model, DataTypes } = require('sequelize');

class Contatos extends Model {
  static init(connection) {
    super.init(
      {
        telefone: DataTypes.STRING,
      },{
        sequelize: connection,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Pessoas,  {foreignKey:'id_pessoa', as:'pessoa' });
  }
}

module.exports = Contatos;
