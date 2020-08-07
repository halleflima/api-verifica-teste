const { Model, DataTypes } = require('sequelize')

class Pessoas extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      nivel_user: DataTypes.INTEGER,
      email: DataTypes.STRING,
      senha: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }
}

module.exports = Pessoas