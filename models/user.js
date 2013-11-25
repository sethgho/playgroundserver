function User(data) {
	if(data !== null) {
	  // this.id = data.id,
	  this.lastName = data.lastName,
	  this.firstName = data.firstName,
	  this.gender = data.gender,
	  this.address = data.address,
	  this.city = data.city,
	  this.stateCode = data.stateCode,
	  this.zipCode = data.zipCode
	}
};

module.exports = User;