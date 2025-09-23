const { promisePool } = require("../config/db");

async function countBuyer() {
    const [row] = await promisePool.query("SELECT COUNT(*) AS total FROM users WHERE role = 'buyer'");
    return row[0].total;
}

module.exports = { 
    countBuyer,
};