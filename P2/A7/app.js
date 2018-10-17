/*
Laboratory 7.
Authors:    Natanael Pérez Bucio - A01371010
            Luis Ángel Lucatero - A01020507
Date:   17/Oct/2018

Filename: app.js
*/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var itemId;

app.post('/setItem', function(req, res) {
    itemId = req.body.id;
    if (itemId) {
        console.log('Element clicked: ' + req.body.name + " whith id: " + itemId);
        res.sendStatus(200);
    }
});

app.get('/item', (req, res) => res.send(itemId));

app.listen(port, () => console.log(`Listening on port ${port}!`));