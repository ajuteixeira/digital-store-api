const mysql2 = require('mysql2/promise');

async function execute(sql) {
    let con = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'digital_store'
    });

    let [results] = await con.query(sql);

    return results;
}

module.exports = {
    execute
}