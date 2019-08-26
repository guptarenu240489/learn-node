const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('From add-product route');
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
});

router.post('/product', (res, req, next) => {
    console.log(res.body);
    req.redirect('/');
});

module.exports = router;