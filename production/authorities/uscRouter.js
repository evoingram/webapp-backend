const router = require('express').Router();

const USCCitations = require('./Model.js');
const restricted = require('../auth/restriction.js');

// GET:  Describe what it does
router.get('/', restricted, (req, res) => {
	USCCitations.find()
		.then(courtdates => {
			res.status(200).json(courtdates);
		})
		.catch(err => res.send(err));
});

// GET:  Describe what it does
router.get('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: `The courtdate with the specified courtdatesid does not exist.` });
	} else {
		USCCitations.findById(courtdatesid)
			.then(courtdate => {
				res.status(201).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({ message: `The courtdate information could not be retrieved.` });
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
			res.status(500).json({ message: `Failed to create new status` });
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
				res.status(404).json({ message: `Could not find status with given id` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update status` });
		});
});
// DELETE:  Describe what it does
router.delete('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: `The courtdate with the specified ID does not exist.` });
	}
	USCCitations.remove(courtdatesid)
		.then(courtdate => {
			res.json(courtdate);
		})
		.catch(err => {
			res.status(500).json({ message: `The courtdate could not be removed` });
		});
});

module.exports = router;
