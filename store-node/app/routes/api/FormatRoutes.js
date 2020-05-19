const daoClass = require('../../dao/FormatDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();


//Find by ID
router.get('/id/:id', (req, res) => {
    dao.findByFormat(req,res, req.params.id);
});

module.exports = router;