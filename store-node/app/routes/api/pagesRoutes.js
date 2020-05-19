const daoClass = require('../../dao/pagesDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

//All Pages
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

//Find by route
router.get('/:slug', (req, res) => {
    dao.findBySlug(req, res, req.params.slug);
});

//Find by route ID
router.get('/:id', (req, res) => {
    dao.findById(req, res, req.params.id);
});

module.exports = router;