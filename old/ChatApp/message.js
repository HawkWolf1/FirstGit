const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`<form action = "/" onsubmit="document.getElementbyId('username').value=localStorage.getItem('username')"
  method="POST">
  <input id="message" type="text"placeHolder="message">
  <input type="hidden" name="username" id="username">
  <button type="submit">send</button>
  </form>`
)});

router.post('/', (req,res,next) =>{
  data.push(`${req.body.username}:${req.body.message}`)
  res.direct('/')
})

module.exports = router