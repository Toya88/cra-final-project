const daoClass = require('../../dao/contactDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

//All contacts
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

// Find by id
// router.get('/:id', (req, res) => {
//     dao.findById(req, res, req.params.id);
// });

//Update contacts
router.post('/update/:id', (req, res) => {
    dao.updateByID(req, res);
});

//create
router.post('/create', (req, res) => {
    dao.create(req, res);
});

//delete
router.get('/delete/:id', (req, res) => {
    dao.deleteById(req, res, req.params.id);
});

module.exports = router;