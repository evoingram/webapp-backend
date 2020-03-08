const jwt = require('jsonwebtoken');

module.exports = {
	getJwt
};

function getJwt(email) {
	const payload = {
		email
	};

	const secret = process.env.JWT_SECRET;

	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, secret, options);
}
