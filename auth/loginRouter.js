const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Customers = require('../customers/customersModel');
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
				res.status(401).json({ message: 'invalid credentials from restriction' });
			}
		})
		.catch(error => {
			res.status(500).json('user not found.  Error:  ' + error);
		});
});

module.exports = router;
postgres://gemunvnsgzdzqo:149dd77d0e7b4ee3b4375b6389b2a691de7e66b253f91865c05e2a02df931801@ec2-18-213-176-229.compute-1.amazonaws.com:5432/dqa6umjfok98l