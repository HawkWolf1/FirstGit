const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router() 

// join yields us a path by concatinating various segments
//dirname holds absolute path on our OS
//path.join detects the OS you are using and builds a correct path
//dirname gives access to base folder we are using and in this case it is 'approutes'
// '../' helps to go up one level
router.get('/', (req, res, next) =>{  
    res.sendFile(path.join(rootDir, 'myviews', 'shop.html'))
})

module.exports = router