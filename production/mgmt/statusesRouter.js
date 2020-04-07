const router = require('express').Router();

const Statuses = require('./statusesModel.js');
const restricted = require('../../auth/restriction.js');

// GET:  gets all statuses for all jobs
router.get('/', restricted, (req, res) => {
	Statuses.find()
		.then(statuses => {
			res.status(200).json(statuses);
		})
		.catch(err => res.send(err));
});

// GET:  gets one status item
router.get('/:sid', restricted, (req, res) => {
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
router.post('/', restricted, (req, res) => {
	const newStatus = req.body.status;

	Statuses.add(newStatus)
		.then(status => {
			res.status(201).json(status);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new status', error: err });
		});
});

// PUT:  Describe what it does
router.put('/:sid', restricted, (req, res) => {
	const sid = req.params.sid;
	const updatedStatus = { status: req.body.status };

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
// DELETE:  delete a status
router.delete('/:sid', restricted, (req, res) => {
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
