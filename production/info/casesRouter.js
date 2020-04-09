const router = require('express').Router();

const Cases = require('./casesModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../../auth/restrictionA.js');
const restrictedC = require('../../auth/restrictionC.js');
const restrictedM = require('../../auth/restrictionM.js');

router.get('/', restrictedM, (req, res) => {
	Cases.find()
		.then(cases => {
			res.status(200).json(cases);
		})
		.catch(err => res.send(err));
});

router.get('/:casesid', restricted, (req, res) => {
	const casesid = req.params.casesid;
	if (!casesid) {
		res.status(404).json({ message: 'The case with the specified casesid does not exist.' });
	} else {
		Cases.findById(casesid)
			.then(onecase => {
				res.status(200).json(onecase);
			})
			.catch(err => {
				res.status(500).json({ message: 'The case information could not be retrieved.' });
			});
	}
});

// POST:  create case
router.post('/', restricted, (req, res) => {
	const newCase = req.body;

	Cases.add(newCase)
		.then(casenew => {
			res.status(201).json(casenew);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new case.', error: err });
		});
});

// PUT:  update case
router.put('/:casesid', restricted, (req, res) => {
	const casesid = req.params.casesid;
	const updatedCase = req.body;

	Cases.update(casesid, updatedCase)
		.then(casetoupdate => {
			if (casetoupdate) {
				res.json(casetoupdate);
			} else {
				res.status(404).json({ message: `Could not find case with given id ${casesid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update case.', error: err });
		});
});

router.delete('/:casesid', restrictedM, (req, res) => {
	const casesid = req.params.casesid;
	if (!casesid) {
		res.status(404).json({ message: 'The case with the specified ID does not exist.' });
	}
	Cases.remove(casesid)
		.then(onecase => {
			res.json(onecase);
		})
		.catch(err => {
			res.status(500).json({ message: 'The case could not be removed' });
		});
});

module.exports = router;
