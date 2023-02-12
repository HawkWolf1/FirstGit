// This file handles "What user sees"

const express = require('express')

const router = express.Router() // router is like a mini express app tied to another express which can be exported


router.get('/', (req, res, next) =>{  
    res.send('<h1>This is working</h1>')
})

module.exports = router