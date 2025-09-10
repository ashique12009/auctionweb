const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'local_auction',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// For async/await queries
const promisePool = pool.promise();

module.exports = { pool, promisePool };