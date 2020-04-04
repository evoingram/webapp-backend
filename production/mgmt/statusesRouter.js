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
router.get('/:statusesid', restricted, (req, res) => {
	const statusesid = req.params.statusesid;
	if (!statusesid) {
		res.status(404).json({ message: `The status with the specified statusesid ${statusesid} does not exist.` });
	} else {
		Statuses.findById(statusesid)
			.then(status => {
				res.status(201).json(status);
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
router.put('/:statusesid', restricted, (req, res) => {
	const statusesid = req.params.statusesid;
	const updatedStatus = { status: req.body.status };

	Statuses.update(statusesid, updatedStatus)
		.then(status => {
			if (status) {
				res.json(status);
			} else {
				res.status(404).json({ message: `Could not find status with given id ${statusesid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update status', error: err });
		});
});
// DELETE:  delete a status
router.delete('/:statusesid', restricted, (req, res) => {
	const statusesid = req.params.statusesid;
	if (!statusesid) {
		res.status(404).json({ message: `The status with the specified ID ${statusesid} does not exist.` });
	}
	Statuses.remove(statusesid)
		.then(status => {
			res.json(status);
		})
		.catch(err => {
			res.status(500).json({ message: `The status ${statusesid} could not be removed`, error: err });
		});
});

module.exports = router;
