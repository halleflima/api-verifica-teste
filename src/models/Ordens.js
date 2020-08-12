const { Model, DataTypes } = require('sequelize');

class Ordens extends Model {
  static init(connection) {
    super.init(
      {
        status: DataTypes.STRING,
      },{
        sequelize: connection,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Ordens,  {foreignKey:'id_pessoa', as:'pes_ordem' });
  }
}

module.exports = Ordens;
