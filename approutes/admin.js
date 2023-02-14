const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router() 


router.get('/mycart', (req, res, next) =>{   
    res.sendFile(path.join(rootDir, 'myviews', 'mycart.html'))
})

router.post('/mycart', (req, res, next) =>{   
    console.log(req.body) 
    res.redirect('/') 
})

module.exports = router 