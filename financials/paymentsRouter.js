const router = require('express').Router();

const Payments = require('./paymentsModel.js');
const restricted = require('../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  gets all payments records
router.get('/', restrictedM, (req, res) => {
	Payments.find()
		.then(payments => {
			res.status(200).json(payments);
		})
		.catch(err => res.send(err));
});

// GET:  gets one payment record
router.get('/:pid', restricted, (req, res) => {
	const pid = req.params.pid;
	if (!pid) {
		res.status(404).json({ message: `The payment with the specified pid ${pid} does not exist.` });
	} else {
		Payments.findById(pid)
			.then(payment => {
				res.status(200).json(payment);
			})
			.catch(err => {
				res.status(500).json({ message: `The payment information could not be retrieved.`, error: err });
			});
	}
});

// POST:  record payment
router.post('/', restricted, (req, res) => {
	const newPayment = req.body;

	Payments.add(newPayment)
		.then(payment => {
			res.status(201).json(payment);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new payment.`, error: err });
		});
});

// PUT:  update payment record
router.put('/:pid', restrictedM, (req, res) => {
	const pid = req.params.pid;
	const updatedPayment = req.body;

	Payments.update(pid, updatedPayment)
		.then(payment => {
			if (payment) {
				res.json(payment);
			} else {
				res.status(404).json({ message: `Could not find payment with given id ${pid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update payment.`, error: err });
		});
});
// DELETE:  delete payment record
router.delete('/:pid', restrictedM, (req, res) => {
	const pid = req.params.pid;
	if (!pid) {
		res.status(404).json({ message: `The payment with the specified ID ${pid} does not exist.` });
	}
	Payments.remove(pid)
		.then(payment => {
			res.json(payment);
		})
		.catch(err => {
			res.status(500).json({ message: `The payment could not be removed.`, error: err });
		});
});

module.exports = router;
