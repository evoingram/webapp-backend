const router = require("express").Router();
const bcrypt = require("bcryptjs");

// defines functions for customers table endpoints
const Customers = require("../customers/customersModel.js");

const Token = require("./authHelpers.js");

// validates username/password
const { validateCustomer } = require("../customers/customersHelpers.js");

router.post("/", (req, res) => {
	let customer = req.body;
	let password = req.body.password;

	// validates username/password
	const validateResult = validateCustomer(customer);

	if (validateResult.isSuccessful === true) {
		const hash = bcrypt.hashSync(password, 10);
		customer.password = hash;

		const token = Token.getJwt(customer.email);
		// registers user
		Customers.add(customer)
			.then((saved) => {
				Customers.res.status(201).json({
					customersid: saved.customersid,
					email: saved.email,
					token: token
				});
			})
			.catch((error) => {
				res.status(500).json({
					message: `invalid credentials from registerRouter ${customer.password} ${hash} ${customer.email} ${bcrypt.compareSync(password, customer.password)}`,
					error: error
				});
			});
	} else {
		res.status(400).json({
			message: "Invalid customer info, see errors",
			errors: validateResult.errors
		});
	}
});

module.exports = router;
