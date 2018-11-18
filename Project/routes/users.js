const express = require('express');
var router = express.Router();

var controller = require('../controllers/users');


router.route('/')
    .get((req, res)=> res.send(controller.getUsers()))
    
    .post((req,res)=> {
        controller.addUser(req.body.user); 
        res.send("SUCCESS");
    });

router.get('/:position', (req,res) => res.send(
    controller.getUser(req.params.position)
));

module.exports = router;