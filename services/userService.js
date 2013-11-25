var User = require('../models/user');

var dummydata = {};
dummydata[1] = new User({
	id : 1,
	lastName : 'Doe',
	firstName : 'John',
	address : '123 Main Street',
	gender : 'male',
	city : 'Blueberryville',
	stateCode : 'TX',
	zipCode : '78729'
});

dummydata[2] = new User({
	id : 2,
	lastName : 'Doe',
	firstName : 'Jane',
	gender : 'female',
	address : '123 Main Street',
	city : 'Blueberryville',
	stateCode : 'TX',
	zipCode : '78729'
});

dummydata[3] = new User({
	id : 3,
	lastName : 'Dozer',
	firstName : 'Dennis',
	address : '4 Register Lane',
	city : 'Marshall',
	stateCode : 'TX',
	zipCode : '82291'
});

function UserService(){
	var self = this;

	self.getAllUsers = function() {
		var users = new Array();
		for(var i in dummydata) {
			users.push(dummydata[i]);
		}
		return users;
	}

	self.getUser = function(userId) {
		return dummydata[userId];		
	}
};

module.exports = UserService;
