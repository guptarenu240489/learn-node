const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminData  = require('./routes/admin');
const shopRoutes= require('./routes/shop');

const app = express();

app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));
// To tell node to use this templating engine
app.set('view engine', 'hbs');
// To tell node where to look for templates
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/* If we want any url to have common route prepended in start e.g. /admin/add-product, /admin/product
we need to add it to filter
app.use('/admin', adminRoutes);

Now all routes in adminRoute will have baseUrl /admin added to them */

app.use('/admin', adminData.router);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

// console.log(path.dirname(process.mainModule.filename));

app.listen(3000);
