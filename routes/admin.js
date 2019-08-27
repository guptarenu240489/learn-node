const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

const products = [];

router.get('/add-product', (req, res, next) => {
    // one way
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

    //another and clean way
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        formsCss: true,
        productCss: true
    });
});

router.post('/add-product', (res, req, next) => {
    products.push({title: res.body.title});
    req.redirect('/');
});

exports.router = router;
exports.products = products;