const router = require('express').Router();

const Appearances = require('./cccModel.js');
const restricted = require('../../auth/restriction.js');

// GET:  get all courtdatescasescustomers (ties the three tables together)
router.get('/', restricted, (req, res) => {
	Appearances.find()
		.then(courtdates => {
			res.status(200).json(courtdates);
		})
		.catch(err => res.send(err));
});

// GET:  get one entry from courtdatescasescustomers (ties the three tables together)
router.get('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: `The apps with the specified courtdatesid ${courtdatesid} does not exist.` });
	} else {
		Appearances.findAppsById(courtdatesid)
			.then(appearances => {
				res.status(201).json(appearances);
			})
			.catch(err => {
				res.status(500).json({
					message: `The apps information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create an entry in courtdatescasescustomers (ties the three tables together)
router.post('/', restricted, (req, res) => {
	const newStatus = req.body.status;

	Appearances.add(newStatus)
		.then(status => {
			res.status(201).json(status);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new status' });
		});
});

// PUT:  update an entry in courtdatescasescustomers (ties the three tables together)
router.put('/:statusesid', restricted, (req, res) => {
	const statusesid = req.params.statusesid;
	const updatedStatus = { status: req.body.status };

	Appearances.update(statusesid, updatedStatus)
		.then(status => {
			if (status) {
				res.json(status);
			} else {
				res.status(404).json({ message: 'Could not find status with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update status' });
		});
});
// DELETE:  delete an entry in courtdatescasescustomers (ties the three tables together)
router.delete('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: 'The courtdate with the specified ID does not exist.' });
	}
	Appearances.remove(courtdatesid)
		.then(courtdate => {
			res.json(courtdate);
		})
		.catch(err => {
			res.status(500).json({ message: 'The courtdate could not be removed' });
		});
});

module.exports = router;
