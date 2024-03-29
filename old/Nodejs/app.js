const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./admin');
const shopRoutes = require('./shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'publics')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'Views', '404.html'))
})

app.listen(4000);
