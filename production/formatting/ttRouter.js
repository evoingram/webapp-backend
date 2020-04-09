const router = require('express').Router();

const TurnaroundTimes = require('./ttModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  get all turnaroundtimes
router.get('/', restricted, (req, res) => {
	TurnaroundTimes.find()
		.then(turnaroundtimes => {
			res.status(200).json(turnaroundtimes);
		})
		.catch(err => res.send(err));
});

// GET:  get a turnaroundtime
router.get('/:ttid', restricted, (req, res) => {
	const ttid = req.params.ttid;
	if (!ttid) {
		res.status(404).json({
			message: `The turnaroundtime with the specified ttid ${ttid} does not exist.`,
			error: err
		});
	} else {
		TurnaroundTimes.findById(ttid)
			.then(turnaroundtime => {
				res.status(200).json(turnaroundtime);
			})
			.catch(err => {
				res.status(500).json({ message: `The turnaroundtime information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create a turnaroundtime
router.post('/', restrictedM, (req, res) => {
	const newTurnaroundTime = req.body;

	TurnaroundTimes.add(newTurnaroundTime)
		.then(turnaroundtime => {
			res.status(201).json(turnaroundtime);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new turnaroundtime.`, error: err });
		});
});

// PUT:  update a turnaroundtime
router.put('/:ttid', restrictedM, (req, res) => {
	const ttid = req.params.ttid;
	const updatedTurnaroundTime = req.body;

	TurnaroundTimes.update(ttid, updatedTurnaroundTime)
		.then(turnaroundtime => {
			if (turnaroundtime) {
				res.json(turnaroundtime);
			} else {
				res.status(404).json({ message: `Could not find turnaroundtime with given id ${ttid}.`, error: err });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update turnaroundtime.`, error: err });
		});
});
// DELETE:  delete a turnaroundtime
router.delete('/:ttid', restrictedM, (req, res) => {
	const ttid = req.params.ttid;
	if (!ttid) {
		res.status(404).json({
			message: `The turnaroundtime with the specified ID ${ttid} does not exist.`,
			error: err
		});
	}
	TurnaroundTimes.remove(ttid)
		.then(turnaroundtime => {
			res.json(turnaroundtime);
		})
		.catch(err => {
			res.status(500).json({ message: `The turnaroundtime with id ${ttid} could not be removed.`, error: err });
		});
});

module.exports = router;
