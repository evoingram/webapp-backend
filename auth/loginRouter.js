const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Customers = require('../customers/customersModel.js');
const Token = require('./authHelpers.js');

router.post('/', (req, res) => {
	let { email, password } = req.body;

	Customers.findBy({ email: email })
		.first()
		.then(customer => {
			if (customer && bcrypt.compareSync(password, customer.password)) {
				const token = Token.getJwt(customer.email);

				res.status(200).json({
					email: customer.email,
					customersid: customer.customersid,
					company: customer.company,
					token
				});
			} else {
				res.status(401).json({
					message: 'invalid credentials from loginRouter',
					customersid: customer.customersid,
					company: customer.company,
					email: customer.email,
					password: customer.password
				});
			}
		})
		.catch(error => {
			res.status(500).json('user not found.  Error:  ' + error);
		});
});

module.exports = router;
