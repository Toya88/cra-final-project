const daoClass = require('../../dao/productsDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

//All products
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

//Find by ID
router.get('/:id', (req, res) => {
    dao.findById(req, res, req.params.id);
});

module.exports = router;