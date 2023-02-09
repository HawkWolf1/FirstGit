const http = require('http')

const express = require('express') //Its a function reference. That function is express(). It instantiates express and assigns app variable to it.

const app = express() //accepts arrays of request handlers

app.use((req, res, next) => {})