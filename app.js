const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('From add-product route');
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
});

/* // Rigt now this middleware will trigger for both get and post request
app.use('/product', (res, req, next) => {
    console.log(res.body);
    req.redirect('/');
});
*/

// Now this will trigger only for post request
app.post('/product', (res, req, next) => {
    console.log(res.body);
    req.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('Ín middleware');
    res.send('<h1>Hello from express!!!</h1>')
});

app.use((req, res, next) => {
    console.log('In next middleware');
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000);
