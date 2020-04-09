const router = require('express').Router();

const Styles = require('./styleModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../../auth/restrictionA.js');
const restrictedC = require('../../auth/restrictionC.js');
const restrictedM = require('../../auth/restrictionM.js');

// GET:  get all styles
router.get('/', restrictedC, (req, res) => {
	Styles.find()
		.then(styles => {
			res.status(200).json(styles);
		})
		.catch(err => res.send(err));
});

// GET:  get one style
router.get('/:sid', restrictedC, (req, res) => {
	const sid = req.params.sid;
	if (!sid) {
		res.status(404).json({ message: `The style with the specified sid ${sid} does not exist.`, error: err });
	} else {
		Styles.findById(sid)
			.then(style => {
				res.status(200).json(style);
			})
			.catch(err => {
				res.status(500).json({ message: `The style information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create a style
router.post('/', restrictedC, (req, res) => {
	const newStyle = req.body;

	Styles.add(newStyle)
		.then(style => {
			res.status(201).json(style);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new style.`, error: err });
		});
});

// PUT:  update a style
router.put('/:sid', restrictedC, (req, res) => {
	const sid = req.params.sid;
	const updatedStyle = req.body;

	Styles.update(sid, updatedStyle)
		.then(style => {
			if (style) {
				res.json(style);
			} else {
				res.status(404).json({ message: `Could not find style with given id ${sid}.`, error: err });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update style.`, error: err });
		});
});
// DELETE:  delete a style
router.delete('/:sid', restrictedM, (req, res) => {
	const sid = req.params.sid;
	if (!sid) {
		res.status(404).json({ message: `The style with the specified ID ${sid} does not exist.`, error: err });
	}
	Styles.remove(sid)
		.then(style => {
			res.json(style);
		})
		.catch(err => {
			res.status(500).json({ message: `The style with id ${sid} could not be removed.`, error: err });
		});
});

module.exports = router;
