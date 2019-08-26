const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes  = require('./routes/admin');
const shopRoutes= require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/* If we want any url to have common route prepended in start e.g. /admin/add-product, /admin/product
we need to add it to filter
app.use('/admin', adminRoutes);

Now all routes in adminRoute will have baseUrl /admin added to them */

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// console.log(path.dirname(process.mainModule.filename));

app.listen(3000);
