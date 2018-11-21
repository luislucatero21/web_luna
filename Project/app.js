const express = require('express');
let db = require('./db');

//let auth = require('./routes/auth');
let users = require('./routes/users');

const app = express();
const port = 3000;

db.test();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/users',users);

app.use((req, res, next) => res.send("Error 404"));

app.use((err, req, res, next)=> res.send("Error 500 "+err));

app.listen(port, () => console.log('Server listening...'));