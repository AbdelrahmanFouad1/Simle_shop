const mySql = require('mysql2');

const pool =  mySql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'first_node',
    password: 'Aa01555156821'
});


module.exports = pool.promise();