const router = require('express').Router();

const Tasks = require('./staffModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  get all contractors
router.get('/', restricted, (req, res) => {
	Tasks.find()
		.then(contractors => {
			res.status(200).json(contractors);
		})
		.catch(err => res.send(err));
});

// GET:  get one contractor
router.get('/:stfid', restricted, (req, res) => {
	const stfid = req.params.stfid;
	if (!stfid) {
		res.status(404).json({ message: `The staff with the specified stfid ${stfid} does not exist.` });
	} else {
		Tasks.findById(stfid)
			.then(contractor => {
				res.status(200).json(contractor);
			})
			.catch(err => {
				res.status(500).json({ message: 'The contractor information could not be retrieved.', error: err });
			});
	}
});

// POST:  create staff
router.post('/', restricted, (req, res) => {
	const newContractor = req.body;

	Tasks.add(newContractor)
		.then(contractor => {
			res.status(201).json(contractor);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new contractor', error: err });
		});
});

// PUT:  update contractor
router.put('/:stfid', restricted, (req, res) => {
	const stfid = req.params.stfid;
	const updatedContractor = req.body;

	Tasks.update(stfid, updatedContractor)
		.then(contractor => {
			if (contractor) {
				res.json(contractor);
			} else {
				res.status(404).json({ message: `Could not find contractor with given id ${stfid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update contractor', error: err });
		});
});
// DELETE:  delete contractor
router.delete('/:stfid', restricted, (req, res) => {
	const stfid = req.params.stfid;
	if (!stfid) {
		res.status(404).json({ message: `The contractor with the specified stfid ${stfid} does not exist.` });
	}
	Tasks.remove(stfid)
		.then(contractor => {
			res.json(contractor);
		})
		.catch(err => {
			res.status(500).json({ message: 'The contractor could not be removed.', error: err });
		});
});

module.exports = router;
