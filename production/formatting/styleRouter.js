const router = require('express').Router();

const Styles = require('./styleModel.js');
const restricted = require('../../auth/restriction.js');

// GET:  get all styles
router.get('/', restricted, (req, res) => {
	Styles.find()
		.then(styles => {
			res.status(200).json(styles);
		})
		.catch(err => res.send(err));
});

// GET:  get one style
router.get('/:sid', restricted, (req, res) => {
	const sid = req.params.sid;
	if (!sid) {
		res.status(404).json({ message: `The style with the specified sid ${sid} does not exist.`, error: err });
	} else {
		Styles.findById(sid)
			.then(style => {
				res.status(201).json(style);
			})
			.catch(err => {
				res.status(500).json({ message: `The style information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create a style
router.post('/', restricted, (req, res) => {
	const newStyle = req.body.style;

	StyleNames.add(newStyle)
		.then(style => {
			res.status(201).json(style);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new style.`, error: err });
		});
});

// PUT:  update a style
router.put('/:sid', restricted, (req, res) => {
	const sid = req.params.sid;
	const updatedStyle = { style: req.body.style };

	StyleNames.update(sid, updatedStyle)
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
router.delete('/:sid', restricted, (req, res) => {
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
