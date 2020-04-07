const router = require('express').Router();

const CommHistory = require('./commHModel.js');
const restricted = require('../../auth/restriction.js');

// GET:  get all commhistory items
router.get('/', restricted, (req, res) => {
	CommHistory.find()
		.then(commhistory => {
			res.status(200).json(commhistory);
		})
		.catch(err => res.send(err));
});

// GET:  get one commhistory item
router.get('/:chid', restricted, (req, res) => {
	const chid = req.params.chid;
	if (!chid) {
		res.status(404).json({ message: `The singlecommhistory with the specified chid ${chid} does not exist.` });
	} else {
		CommHistory.findById(chid)
			.then(singlecommhistory => {
				res.status(200).json(singlecommhistory);
			})
			.catch(err => {
				res.status(500).json({
					message: `The singlecommhistory information could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create a commhistory item
router.post('/', restricted, (req, res) => {
	const newCommHistory = req.body.commhistory;

	CommHistory.add(newCommHistory)
		.then(commhistory => {
			res.status(201).json(commhistory);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new commhistory item.`, error: err });
		});
});

// PUT:  update a commhistory item
router.put('/:chid', restricted, (req, res) => {
	const chid = req.params.chid;
	const updatedCommHistory = { commhistory: req.body.commhistory };

	CommHistory.update(chid, updatedCommHistory)
		.then(commhistory => {
			if (commhistory) {
				res.json(commhistory);
			} else {
				res.status(404).json({ message: `Could not find commhistory item with given id ${chid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update commhistory.`, error: err });
		});
});
// DELETE:  delete an item of commhistory
router.delete('/:chid', restricted, (req, res) => {
	const chid = req.params.chid;
	if (!chid) {
		res.status(404).json({ message: `The singlecommhistory with the specified ID ${chid} does not exist.` });
	}
	CommHistory.remove(chid)
		.then(singlecommhistory => {
			res.json(singlecommhistory);
		})
		.catch(err => {
			res.status(500).json({ message: `The singlecommhistory could not be removed.`, error: err });
		});
});

module.exports = router;
