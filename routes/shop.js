const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const app = express();

app.set('views', '')

const router = express.Router();

app.use('/admin', adminData.routes);

router.get('/',(req,res,next) => {
    const product = adminData.products
    res.sendFile(path.join(rootDir,'views','shop.html'))
});


module.exports = router;