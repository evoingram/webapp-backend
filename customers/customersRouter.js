const router = require('express').Router();

// defines functions for customers table endpoints
const Customers = require('./customersModel.js');

// locks endpoints behind login in below endpoints
const restricted = require('../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  list of customers endpoint
router.get('/', restrictedM, (req, res) => {
	Customers.find()
		.then(customers => {
			res.status(200).json(customers);
		})
		.catch(err => res.send(err));
});

// GET:  single customer endpoint
router.get('/:customersid', restricted, (req, res) => {
	const customersid = req.params.customersid;
	if (!customersid) {
		res.status(404).json({ message: `The customer with the specified customersid ${customersid} does not exist.` });
	} else {
		Customers.findById(customersid)
			.then(customer => {
				res.status(200).json(customer);
			})
			.catch(err => {
				res.status(500).json({ message: `The customer information could not be retrieved.`, error: err });
			});
	}
});

// GET:  usertype for a single customer endpoint
router.get('/:customersid/usertype', restrictedM, (req, res) => {
	const customersid = req.params.customersid;
	if (!customersid) {
		res.status(404).json({ message: `The customer with the specified customersid ${customersid} does not exist.` });
	} else {
		Customers.findUsertypeById(customersid)
			.then(usertype => {
				res.status(200).json(usertype);
			})
			.catch(err => {
				res.status(500).json({
					message: `Jobs for the customer id ${customersid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  jobs for a single customer endpoint
router.get('/:customersid/jobs', restricted, (req, res) => {
	const customersid = req.params.customersid;
	if (!customersid) {
		res.status(404).json({ message: `The customer with the specified customersid ${customersid} does not exist.` });
	} else {
		Customers.findJobsById(customersid)
			.then(joblist => {
				res.status(200).json([joblist]);
			})
			.catch(err => {
				res.status(500).json({
					message: `Jobs for the customer id ${customersid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  cases for a single customer endpoint
router.get('/:customersid/cases', restricted, (req, res) => {
	const customersid = req.params.customersid;
	if (!customersid) {
		res.status(404).json({ message: `The customer with the specified customersid ${customersid} does not exist.` });
	} else {
		Customers.findCasesById(customersid)
			.then(caselist => {
				res.status(200).json(caselist);
			})
			.catch(err => {
				res.status(500).json({
					message: `Cases for the customer id ${customersid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  invoices for a single customer endpoint
router.get('/:customersid/invoices', restricted, (req, res) => {
	const customersid = req.params.customersid;
	if (!customersid) {
		res.status(404).json({ message: `The customer with the specified customersid ${customersid} does not exist.` });
	} else {
		Customers.findInvoicesById(customersid)
			.then(invoicelist => {
				res.status(200).json(invoicelist);
			})
			.catch(err => {
				res.status(500).json({
					message: `Invoices for the customer id ${customersid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create customer
router.post('/', restricted, (req, res) => {
	const newCustomer = req.body;

	Customers.add(newCustomer)
		.then(customer => {
			res.status(201).json(customer);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new customer.', error: err });
		});
});

// PUT:  update customer
router.put('/:customersid', restricted, (req, res) => {
	const customersid = req.params.customersid;
	const updatedCustomer = req.body;

	Customers.update(customersid, updatedCustomer)
		.then(customer => {
			if (customer) {
				res.json(customer);
			} else {
				res.status(404).json({ message: `Could not find customer with given id ${customersid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update customer.', error: err });
		});
});
// DELETE:  single customer endpoint
router.delete('/:customersid', restrictedM, (req, res) => {
	const customersid = req.params.customersid;
	if (!customersid) {
		res.status(404).json({ message: `The customer with the specified ID ${customersid} does not exist.` });
	}
	Customers.remove(customersid)
		.then(customer => {
			res.json(customer);
		})
		.catch(err => {
			res.status(500).json({ message: `The customer could not be removed`, error: err });
		});
});

module.exports = router;
