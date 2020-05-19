const express = require('express');
const router = express.Router();

// /api/products
router.use('/products', require('./api/productsRoutes'));

// /api/format
router.use('/format', require('./api/FormatRoutes'));

// /api/pages
router.use('/pages', require('./api/pagesRoutes'));

// /api/contact
router.use('/contact', require('./api/contactRoutes'));

module.exports = router;