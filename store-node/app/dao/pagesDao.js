const pool = require('../config/dbconfig');

class pagesDao {
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        let sql = 'SELECT * FROM pages';
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

    findBySlug(req, res, slug) {
        let sql = 'SELECT * FROM pages WHERE slug = ?';
        this.pool.query(sql, [slug], (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows[0]);
        });        
    }

    findById(req, res, id) {
        let sql = 'SELECT * FROM pages WHERE id = ?';
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

module.exports = pagesDao;

