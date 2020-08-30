const jwt = require("jsonwebtoken");

// defines functions for customers table endpoints
const Customers = require("../customers/customersModel.js");

// add customersid variable & url or function inputs
module.exports = (req, res, next) => {
	const token = req.headers.authorization;
	const customersid = req.params.customersid;

	if (token) {
		const secret = process.env.JWT_SECRET;

		jwt.verify(token, secret, customersid, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: "invalid credentials from restriction" });
			} else {
				req.decodedJwt = decodedToken;
				// next();
				Customers.findUsertypeById(customersid)
					.then((customer) => {
						if (customer.usertype === "admin") {
							next();
						} else {
							res.status(400).json({
								message: "Inadequate credentials provided to access this endpoint"
							});
						}
					})
					.catch((err) => {
						res.status(500).json({
							message: "The customer information could not be retrieved.",
							error: err
						});
					});
			}
		});
	} else {
		res.status(400).json({ message: "No credentials provided" });
	}
};
