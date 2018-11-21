//ROUTES

const express = require('express');
var router = express.Router();

var controller = require('../controllers/users');

router.route('/')
    .get(async (req, res)=> {
    	try {
    		response = await controller.getUsers();
    		console.log("SUCCESS");
    		res.status(200);
    		res.send(response);
    	}
    	catch(error){
    		console.log("ERROR: " + error);
    		res.status(501);
    		res.send(error);
    	}
	})
    
    .post((req,res)=> {
        controller.addUser(req.body.user); 
        res.send("SUCCESS");
    });

router.get('/:position', (req,res) => res.send(
    controller.getUser(req.params.position)
));

module.exports = router;