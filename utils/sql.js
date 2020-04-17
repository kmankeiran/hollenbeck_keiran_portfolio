const config = require("../config");
const sql = require('mysql');

const connect = sql.createPool({
    connectionLimit: 20,
    host: config.host,
    //port: config.port,
    user: config.uname,
    password: config.pword,
    database: config.database
});

module.exports = connect;