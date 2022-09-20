const Sequelize = require('sequelize');

const sequelize = new Sequelize('first_node', 'root', 'Aa01555156821', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;


