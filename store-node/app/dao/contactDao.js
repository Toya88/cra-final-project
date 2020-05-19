const pool = require('../config/dbconfig');

class contactDao {
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        let sql = 'SELECT * FROM contact';
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

    create(res, req) {
        let fields = Object.keys(req.body);
        let values = Object.values(req.body);

        if (!req.body.fname || !req.body.lname || !req.body.email) {
            res.json({
                "error": true,
                "message": "Error, Form input is blank"
            }); 
        };


        let sql = `Insert into contact (${fields.join(',')}) values (${Array(values.length).fill('?').join(',')});`;

        this.pool.query(sql, values, (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": "Error in sql statement"
                });
            };

            res.json(rows);
        });
    }

    deleteById(req,res, id) {
        let sql = 'UPDATE contact set delete_at = NOW() WHERE id = ?';

        this.pool.query(sql, [id], (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows);
        })
    }
}

module.exports = contactDao;