
users =[
    {
        "id": 1,
        "name": "Eduardo A.",
        "ocupation": "SDE"
    }
];

controller = {};

controller.getUsers = function(){
    return users;
}

controller.getUser = function(position){
    return users[position];
}

controller.addUser = function(user){
    if(user)
    users.push(user);
}

module.exports = controller;