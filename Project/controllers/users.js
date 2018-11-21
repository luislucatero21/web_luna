//CONTROLLERS

var AJV = require('ajv');
var schema = require('../schemas/users');

var db = require('../db');

var ajv = new AJV({});

let users = [];

controller = {};

controller.getUsers = function(){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("select * from Users;", 
                function (err, rows){
                    if (err){
                        reject(err);
                    }
                    resolve(rows);
                }
            );
        }
    );

    return promise;
}

controller.getElement = function(position){
    return users[position];
}

controller.addElement = function(element){
    var valid = ajv.validate(schema,element);
    if (valid){
        users.push(element);
        console.log("New user added");
    }
    else{
        console.log("ERROR in shcema: ");
        console.log(ajv.errors);
    }
}

module.exports = controller;