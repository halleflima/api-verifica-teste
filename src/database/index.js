const Sequelize = require('sequelize')
const db_config = require('../config/database')

const Pessoa = require('../models/Pessoas')

const connection = new Sequelize(db_config);

Pessoa.init(connection)

module.exports = connection;