const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

const adminData = require('../routes/admin');

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // We already mention view engine in app.js os it will look for shop.pug
    // inside views folder as views was also mentions using app.set
    res.render('shop', {prods: adminData.products, pageTitle: 'Shops', path: '/'});
});

module.exports = router;