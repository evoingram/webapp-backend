const router = require('express').Router();

const ExamTypes = require('./Model.js');
const restricted = require('./auth/restriction.js');

// GET:  get all examtypes
router.get('/', restricted, (req, res) => {
	ExamTypes.find()
		.then(examtypes => {
			res.status(200).json(examtypes);
		})
		.catch(err => res.send(err));
});

// GET:  get an examtype
router.get('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	if (!eid) {
		res.status(404).json({ message: `The examtype with the specified eid ${eid} does not exist.`, error: err });
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

// POST:  create an examtype
router.post('/', restricted, (req, res) => {
	const newExamType = req.body.examtype;

	ExamTypes.add(newExamType)
		.then(examtype => {
			res.status(201).json(examtype);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new examtype.`, error: err });
		});
});

// PUT:  update an examtype
router.put('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	const updatedExamType = { examtype: req.body.examtype };

	ExamTypes.update(eid, updatedExamType)
		.then(examtype => {
			if (examtype) {
				res.json(examtype);
			} else {
				res.status(404).json({ message: `Could not find examtype with given id ${eid}.`, error: err });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update examtype with id ${eid}.`, error: err });
		});
});
// DELETE:  delete an examtype
router.delete('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	if (!eid) {
		res.status(404).json({ message: `The examtype with the specified ID ${eid} does not exist.`, error: err });
	}
	ExamTypes.remove(eid)
		.then(examtype => {
			res.json(examtype);
		})
		.catch(err => {
			res.status(500).json({ message: `The examtype with id ${eid} could not be removed.`, error: err });
		});
});

module.exports = router;
