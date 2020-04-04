const router = require('express').Router();

const TurnaroundTimes = require('./ttModel.js/index.js');
const restricted = require('./auth/restriction.js');

// GET:  Describe what it does
router.get('/', restricted, (req, res) => {
	TurnaroundTimes.find()
		.then(turnaroundtimes => {
			res.status(200).json(turnaroundtimes);
		})
		.catch(err => res.send(err));
});

// GET:  Describe what it does
router.get('/:ttid', restricted, (req, res) => {
	const ttid = req.params.ttid;
	if (!ttid) {
		res.status(404).json({ message: `The turnaroundtime with the specified ttid does not exist.`, error: err });
	} else {
		TurnaroundTimes.findById(ttid)
			.then(turnaroundtime => {
				res.status(201).json(turnaroundtime);
			})
			.catch(err => {
				res.status(500).json({ message: `The turnaroundtime information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create status
router.post('/', restricted, (req, res) => {
	const newStatus = req.body.status;

	TurnaroundTimes.add(newStatus)
		.then(status => {
			res.status(201).json(status);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new status.`, error: err });
		});
});

// PUT:  Describe what it does
router.put('/:ttid', restricted, (req, res) => {
	const ttid = req.params.ttid;
	const updatedStatus = { status: req.body.status };

	TurnaroundTimes.update(ttid, updatedStatus)
		.then(status => {
			if (status) {
				res.json(status);
			} else {
				res.status(404).json({ message: `Could not find status with given id.`, error: err });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update status.`, error: err });
		});
});
// DELETE:  Describe what it does
router.delete('/:ttid', restricted, (req, res) => {
	const ttid = req.params.ttid;
	if (!ttid) {
		res.status(404).json({ message: `The turnaroundtime with the specified ID does not exist.`, error: err });
	}
	TurnaroundTimes.remove(ttid)
		.then(turnaroundtime => {
			res.json(turnaroundtime);
		})
		.catch(err => {
			res.status(500).json({ message: `The turnaroundtime could not be removed.`, error: err });
		});
});

module.exports = router;
