const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Ín middleware');
    res.send('<h1>Hello from express!!!</h1>')
});

module.exports = router;