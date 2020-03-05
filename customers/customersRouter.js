const router = require('express').Router();

const Customers = require('./customersModel.js');
const restricted = require('../auth/restriction.js');

router.get('/', restricted, (req, res) => {
	Customers.find()
		.then(customers => {
			res.status(200).json(customers);
		})
		.catch(err => res.send(err));
});

router.get('/:customersid', restricted, (req, res) => {
	const customersid = req.params.customersid;
	if (!customersid) {
		res.status(404).json({ message: 'The customer with the specified customersid does not exist.' });
	} else {
		Customers.findById(customersid)
			.then(customer => {
				res.status(201).json(customer);
			})
			.catch(err => {
				res.status(500).json({ message: 'The customer information could not be retrieved.' });
			});
	}
});

router.delete('/:customersid', restricted, (req, res) => {
	const customersid = req.params.customersid;
	if (!customersid) {
		res.status(404).json({ message: 'The customer with the specified ID does not exist.' });
	}
	Customers.remove(customersid)
		.then(customer => {
			res.json(customer);
		})
		.catch(err => {
			res.status(500).json({ message: 'The customer could not be removed' });
		});
});

module.exports = router;
