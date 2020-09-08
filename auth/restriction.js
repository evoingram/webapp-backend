const jwt = require("jsonwebtoken");

// defines functions for customers table endpoints
const Customers = require("../customers/customersModel.js");

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		const secret = process.env.JWT_SECRET;

		jwt.verify(token, secret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: `"invalid credentials from restriction. token="${token}" decoded="${decodedToken}"`, error: err });
			} else {
				req.decodedJwt = decodedToken;
				next();
			}
		});
	} else {
		res.status(400).json({ message: "No credentials provided" });
	}
};
