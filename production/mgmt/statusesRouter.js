const router = require('express').Router();

const Statuses = require('./statusesModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  gets all statuses for all jobs
router.get('/', restrictedC, (req, res) => {
	Statuses.find()
		.then(statuses => {
			res.status(200).json(statuses);
		})
		.catch(err => res.send(err));
});

// GET:  gets one status item
router.get('/:sid', restrictedC, (req, res) => {
	const sid = req.params.sid;
	if (!sid) {
		res.status(404).json({ message: `The status with the specified sid ${sid} does not exist.` });
	} else {
		Statuses.findById(sid)
			.then(status => {
				res.status(200).json(status);
			})
			.catch(err => {
				res.status(500).json({ message: 'The status information could not be retrieved.', error: err });
			});
	}
});

// POST:  create status
router.post('/', restrictedM, (req, res) => {
	const newStatus = req.body;

	Statuses.add(newStatus)
		.then(status => {
			res.status(201).json(status);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new status', error: err });
		});
});

// PUT:  update a status item
router.put('/:sid', restrictedM, (req, res) => {
	const sid = req.params.sid;
	const updatedStatus = req.body;

	Statuses.update(sid, updatedStatus)
		.then(status => {
			if (status) {
				res.json(status);
			} else {
				res.status(404).json({ message: `Could not find status with given id ${sid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update status', error: err });
		});
});
// DELETE:  delete a status item
router.delete('/:sid', restrictedM, (req, res) => {
	const sid = req.params.sid;
	if (!sid) {
		res.status(404).json({ message: `The status with the specified ID ${sid} does not exist.` });
	}
	Statuses.remove(sid)
		.then(status => {
			res.json(status);
		})
		.catch(err => {
			res.status(500).json({ message: `The status ${sid} could not be removed`, error: err });
		});
});

module.exports = router;
