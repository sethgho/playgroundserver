var User = require('../models/user');

function UserService(){
	var self = this;

	self.getAllUsers = function() {
		var users = new Array();
		users.push(new User());

		return users;
	}
};

module.exports = UserService;
