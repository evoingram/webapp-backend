const router = require('express').Router();

const ShippingOptions = require('./shippingModel.js');
const restricted = require('../../auth/restriction.js');

// GET:  get all packages shipped
router.get('/', restricted, (req, res) => {
	ShippingOptions.find()
		.then(shippingoptions => {
			res.status(200).json(shippingoptions);
		})
		.catch(err => res.send(err));
});

// GET:  get one shipped package
router.get('/:soid', restricted, (req, res) => {
	const soid = req.params.soid;
	if (!soid) {
		res.status(404).json({ message: `The shippingitem with the specified soid ${soid} does not exist.` });
	} else {
		ShippingOptions.findById(soid)
			.then(shippingitem => {
				res.status(201).json(shippingitem);
			})
			.catch(err => {
				res.status(500).json({ message: `The shippingitem information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create a shipped package record
router.post('/', restricted, (req, res) => {
	const newShippingOptions = req.body.shippingitem;

	ShippingOptions.add(newShippingOptions)
		.then(shippingitem => {
			res.status(201).json(shippingitem);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new shippingitem.`, error: err });
		});
});

// PUT:  update a shipped package record
router.put('/:soid', restricted, (req, res) => {
	const soid = req.params.soid;
	const updatedShippingOptions = { shippingitem: req.body.shippingitem };

	ShippingOptions.update(soid, updatedShippingOptions)
		.then(shippingitem => {
			if (shippingitem) {
				res.json(shippingitem);
			} else {
				res.status(404).json({ message: `Could not find shippingitem with given id ${soid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update shippingitem.`, error: err });
		});
});
// DELETE:  delete a shipped package record
router.delete('/:soid', restricted, (req, res) => {
	const soid = req.params.soid;
	if (!soid) {
		res.status(404).json({ message: `The shippingitem with the specified ID ${soid} does not exist.` });
	}
	ShippingOptions.remove(soid)
		.then(shippingitem => {
			res.json(shippingitem);
		})
		.catch(err => {
			res.status(500).json({ message: `The shippingitem could not be removed.`, error: err });
		});
});

module.exports = router;
