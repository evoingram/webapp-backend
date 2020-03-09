module.exports = {
	validateCustomer
};

function validateCustomer(customer) {
	let errors = [];

	if (!customer.username || customer.username.length < 2) {
		errors.push('Username must contain at least 2 characters');
	}

	if (!customer.password || customer.password.length < 4) {
		errors.push('Password must contain at least 4 characters');
	}

	return {
		isSuccessful: errors.length > 0 ? false : true,
		errors
	};
}
