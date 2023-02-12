// This file Handles the creation of the products
const express = require('express')

const router = express.Router() // router is like a mini express app tied to another express which can be exported

//same path ca nbe used if method are different
// either we can write it as /admin/mycart or we can do it as done in app.js file
router.get('/mycart', (req, res, next) =>{   
    res.send('<form action="/admin/mycart" method="POST"><input type ="text" name="title"><button type="submit">Add product</button></form>')
})

router.post('/mycart', (req, res, next) =>{   //post tag is used to filter for post requests
    console.log(req.body) //line 8 reaches here 
    res.redirect('/') 
})

module.exports = router // router is being exported