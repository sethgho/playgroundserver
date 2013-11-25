var UserService = require('../services/userService');
var service = new UserService();

function hello(req, res) {
  res.send('Hello world');
}

function getUsers(req, res) {
	var users;
	if(req.params.id){
		users = service.getUser(req.params.id);
	}	
	else {
		users = service.getAllUsers();
	}
	res.send(users);
}

module.exports = function (app) {
  app.get('/api/hello_world', hello); 
  app.get('/api/user/all',getUsers);
  app.get('/api/user/:id*',getUsers);
};