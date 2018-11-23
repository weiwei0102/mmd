var pool = require("mysql").createPool({
    port: 3306,
    user: "root",
    password: "root",
    database: "moveall",
    connectionLimit: 100
})

function getQuery(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            return ck && ck(err);
        }
        con.query(sql, arr, function(err, result) {
            if (err) {
                return ck && ck(err);
            }
            ck && ck(null, result);
            con.release();
        })
    })
}
module.exports = getQuery;