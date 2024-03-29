const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'Views', 'shop.html'));
});

module.exports = router;