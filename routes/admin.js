const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/add-product', (req, res, next) => {
    // one way
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

    //another and clean way
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (res, req, next) => {
    console.log(res.body);
    req.redirect('/');
});

module.exports = router;