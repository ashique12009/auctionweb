const { promisePool } = require("../config/db");

async function countSeller() {
    const [row] = await promisePool.query("SELECT COUNT(*) AS total FROM users WHERE role = 'seller'");
    return row[0].total;
}

async function getAllSellers() {
    const [rows] = await promisePool.query("SELECT * FROM users WHERE role = 'seller'");
    return rows;
}

module.exports = { 
    countSeller, 
    getAllSellers
};