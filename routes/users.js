var UserService = require('../services/userService');
var service = new UserService();

function hello(req, res) {
  res.send('Hello world');
}

function allUsers(req,res) {
	var users = service.getAllUsers();
	res.send(users);
}

module.exports = function (app) {
  app.get('/api/hello_world', hello);
  app.get('/api/users/', allUsers);
};