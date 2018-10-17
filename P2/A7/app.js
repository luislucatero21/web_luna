/*
Laboratory 7.
Authors:    Natanael Pérez Bucio - A01371010
            Luis Ángel Lucatero - A01020507
Date:   17/Oct/2018

Filename: app.js
*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))