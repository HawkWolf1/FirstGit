const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.send(
    '<form action="/loginRoute/login" method="POST"><input type="text" placeHolder="username" name="title"><button type="submit">Login</button></form>'
  );
});

router.post('/login', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;