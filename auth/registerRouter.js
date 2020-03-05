const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Customers = require('../customers/customerModel.js');
const Token = require('./authHelpers.js');
const { validateCustomer } = require('../customers/customersHelpers.js');

router.post('/', validateCustomer, (req, res) => {
	let customer = req.body;

	const validateResult = validateCustomer(customer);

	if (validateResult.isSuccessful === true) {
		const hash = bcrypt.hashSync(customer.password, 10);
		customer.password = hash;

		const token = Token.getJwt(customer.email);
		console.log('token hashed!! Next, registering.');
		Customers.add(customer)
			.then(saved => {
				Customers.addAsHelper({ customersid: saved.customersid, rolesid: 2 });
				res.status(201).json({
					customersid: saved.customersid,
					email: saved.email,
					name: saved.name,
					token: token
				});
			})
			.catch(error => {
				res.status(500).json(error);
			});
	} else {
		res.status(400).json({
			message: 'Invalid customer info, see errors',
			errors: validateResult.errors
		});
	}
});

module.exports = router;
