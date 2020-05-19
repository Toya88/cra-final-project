const pool = require('../config/dbconfig');

class ProductsDao {
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        let sql = 'SELECT * FROM products';
        this.pool.query(sql, (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows);
        });        
    }

    findById(req, res, id) {
        let sql = 'SELECT p.title, p.price, p.`description`, p.`image`, f.format as format FROM products p JOIN formats f ON p.format_id = f.id where p.id = ?';
        this.pool.query(sql, [id], (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows[0]);
        });
    }
}

module.exports = ProductsDao;
// SELECT p.title, p.price, p.`description`, p.`image`, f.format as format FROM products p JOIN formats f ON f.id = p.format_id WHERE p.format_id Select * From products WHERE id = ?