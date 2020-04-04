const router = require('express').Router();

// defines functions for customers table endpoints
const Customers = require('./customersModel.js');

// locks endpoints behind login in below endpoints
const restricted = require('../auth/restriction.js');

// GET:  list of customers endpoint
router.get('/', restricted, (req, res) => {
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
				res.status(201).json(customer);
			})
			.catch(err => {
				res.status(500).json({ message: `The customer information could not be retrieved.`, error: err });
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
				res.status(201).json(joblist);
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
				res.status(201).json(caselist);
			})
			.catch(err => {
				res.status(500).json({
					message: `Cases for the customer id ${customersid} could not be retrieved.`,
					error: err
				});
			});
	}
});
// DELETE:  single customer endpoint
router.delete('/:customersid', restricted, (req, res) => {
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
