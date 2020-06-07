const {createPool} = require('mysql');

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"techronx"

});

module.exports = pool;
