const router = require('express').Router();

const Styles = require('./styleModel.js/index.js');
const restricted = require('./auth/restriction.js');

// GET:  Describe what it does
router.get('/', restricted, (req, res) => {
	Styles.find()
		.then(styles => {
			res.status(200).json(styles);
		})
		.catch(err => res.send(err));
});

// GET:  Describe what it does
router.get('/:sid', restricted, (req, res) => {
	const sid = req.params.sid;
	if (!sid) {
		res.status(404).json({ message: `The style with the specified sid does not exist.`, error: err });
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

// POST:  create status
router.post('/', restricted, (req, res) => {
	const newStyle = req.body.status;

	StyleNames.add(newStyle)
		.then(status => {
			res.status(201).json(status);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new status.`, error: err });
		});
});

// PUT:  Describe what it does
router.put('/:sid', restricted, (req, res) => {
	const sid = req.params.sid;
	const updatedStyle = { status: req.body.status };

	StyleNames.update(sid, updatedStyle)
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
router.delete('/:sid', restricted, (req, res) => {
	const sid = req.params.sid;
	if (!sid) {
		res.status(404).json({ message: `The style with the specified ID does not exist.`, error: err });
	}
	Styles.remove(sid)
		.then(style => {
			res.json(style);
		})
		.catch(err => {
			res.status(500).json({ message: `The style could not be removed.`, error: err });
		});
});

module.exports = router;
