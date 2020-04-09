const router = require('express').Router();

const ExamTypes = require('./examtypesModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../../auth/restrictionA.js');
const restrictedC = require('../../auth/restrictionC.js');
const restrictedM = require('../../auth/restrictionM.js');

// GET:  get all examtypes
router.get('/', restrictedC, (req, res) => {
	ExamTypes.find()
		.then(examtypes => {
			res.status(200).json(examtypes);
		})
		.catch(err => res.send(err));
});

// GET:  get an examtype
router.get('/:eid', restrictedC, (req, res) => {
	const eid = req.params.eid;
	if (!eid) {
		res.status(404).json({ message: `The examtype with the specified eid ${eid} does not exist.`, error: err });
	} else {
		ExamTypes.findById(eid)
			.then(examtype => {
				res.status(200).json(examtype);
			})
			.catch(err => {
				res.status(500).json({ message: `The examtype information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create an examtype
router.post('/', restrictedM, (req, res) => {
	const newExamType = req.body;

	ExamTypes.add(newExamType)
		.then(examtype => {
			res.status(201).json(examtype);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new examtype.`, error: err });
		});
});

// PUT:  update an examtype
router.put('/:eid', restrictedM, (req, res) => {
	const eid = req.params.eid;
	const updatedExamType = req.body;

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
router.delete('/:eid', restrictedM, (req, res) => {
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
