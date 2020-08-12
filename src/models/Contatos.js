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
}

module.exports = Contatos;
