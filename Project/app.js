const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('public'));

app.use((req, res, next) => res.send("Error 404"));

app.use((err, req, res, next)=> res.send("Error 500 "+err));

app.listen(port, () => console.log('Server listening...'));