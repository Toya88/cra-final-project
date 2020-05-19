const pool = require('../config/dbconfig');

class FormatDao {
    constructor() {
        this.pool = pool;
    }



    findByFormat(req, res, id) {
        let sql = 'SELECT * FROM products WHERE format = ?';
        this.pool.query(sql, [id], (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows);
        });
    }
}

module.exports = FormatDao;