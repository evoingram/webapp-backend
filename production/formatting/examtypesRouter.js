const router = require('express').Router();

const ExamTypes = require('./Model.js');
const restricted = require('./auth/restriction.js');

// GET:  Describe what it does
router.get('/', restricted, (req, res) => {
	ExamTypes.find()
		.then(examtypes => {
			res.status(200).json(examtypes);
		})
		.catch(err => res.send(err));
});

// GET:  Describe what it does
router.get('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	if (!eid) {
		res.status(404).json({ message: `The examtype with the specified eid does not exist.`, error: err });
	} else {
		ExamTypes.findById(eid)
			.then(examtype => {
				res.status(201).json(examtype);
			})
			.catch(err => {
				res.status(500).json({ message: `The examtype information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create status
router.post('/', restricted, (req, res) => {
	const newExamType = req.body.status;

	ExamTypes.add(newExamType)
		.then(status => {
			res.status(201).json(status);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new status.`, error: err });
		});
});

// PUT:  Describe what it does
router.put('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	const updatedExamType = { status: req.body.status };

	ExamTypes.update(eid, updatedExamType)
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
router.delete('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	if (!eid) {
		res.status(404).json({ message: `The examtype with the specified ID does not exist.`, error: err });
	}
	ExamTypes.remove(eid)
		.then(examtype => {
			res.json(examtype);
		})
		.catch(err => {
			res.status(500).json({ message: `The examtype could not be removed.`, error: err });
		});
});

module.exports = router;
