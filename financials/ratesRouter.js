const router = require('express').Router();

const Rates = require('./ratesModel.js');
const restricted = require('../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  get all rates
router.get('/', restrictedM, (req, res) => {
	Rates.find()
		.then(rates => {
			res.status(200).json(rates);
		})
		.catch(err => res.send(err));
});

// GET:  get one rate
router.get('/:ratesid', restricted, (req, res) => {
	const ratesid = req.params.ratesid;
	if (!ratesid) {
		res.status(404).json({ message: `The rate with the specified ratesid ${ratesid} does not exist.` });
	} else {
		Rates.findById(ratesid)
			.then(rate => {
				res.status(200).json(rate);
			})
			.catch(err => {
				res.status(500).json({ message: `The rate information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create rate
router.post('/', restrictedM, (req, res) => {
	const newRate = req.body;

	Rates.add(newRate)
		.then(rate => {
			res.status(201).json(rate);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new rate.`, error: err });
		});
});

// PUT:  update a rate
router.put('/:ratesid', restrictedM, (req, res) => {
	const ratesid = req.params.ratesid;
	const updatedRate = req.body;

	Rates.update(ratesid, updatedRate)
		.then(rate => {
			if (rate) {
				res.json(rate);
			} else {
				res.status(404).json({ message: `Could not find rate with given id .` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update rate.`, error: err });
		});
});
// DELETE:  delete a rate
router.delete('/:ratesid', restrictedM, (req, res) => {
	const ratesid = req.params.ratesid;
	if (!ratesid) {
		res.status(404).json({ message: `The rate with the specified ID ${ratesid} does not exist.` });
	}
	Rates.remove(ratesid)
		.then(rate => {
			res.json(rate);
		})
		.catch(err => {
			res.status(500).json({ message: `The rate could not be removed.`, error: err });
		});
});

module.exports = router;
