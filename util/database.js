const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Aa01555156821', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize;


