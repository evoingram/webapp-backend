const router = require('express').Router();

const Invoices = require('./invoicesModel.js');
const restricted = require('../auth/restriction.js');

// GET:  get all invoices
router.get('/', restricted, (req, res) => {
	Invoices.find()
		.then(invoices => {
			res.status(200).json(invoices);
		})
		.catch(err => res.send(err));
});

// GET:  get one invoice
router.get('/:iid', restricted, (req, res) => {
	const iid = req.params.iid;
	if (!iid) {
		res.status(404).json({ message: `The invoice with the specified iid ${iid} does not exist.` });
	} else {
		Invoices.findById(iid)
			.then(invoice => {
				res.status(200).json(invoice);
			})
			.catch(err => {
				res.status(500).json({ message: 'The invoice information could not be retrieved.', error: err });
			});
	}
});

// POST:  create invoice
router.post('/', restricted, (req, res) => {
	const newInvoice = req.body;

	Invoices.add(newInvoice)
		.then(invoice => {
			res.status(201).json(invoice);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new invoice' });
		});
});

// PUT:  update invoice
router.put('/:iid', restricted, (req, res) => {
	const iid = req.params.iid;
	const updatedStatus = req.body;

	Invoices.update(iid, updatedStatus)
		.then(invoice => {
			if (invoice) {
				res.json(invoice);
			} else {
				res.status(404).json({ message: `Could not find invoice with given id ${iid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update invoice', error: err });
		});
});

// DELETE:  delete invoice
router.delete('/:iid', restricted, (req, res) => {
	const iid = req.params.iid;
	if (!iid) {
		res.status(404).json({ message: `The invoice with the specified ID ${iid} does not exist.` });
	}
	Invoices.remove(iid)
		.then(invoice => {
			res.json(invoice);
		})
		.catch(err => {
			res.status(500).json({ message: 'The invoice could not be removed', error: err });
		});
});

module.exports = router;
