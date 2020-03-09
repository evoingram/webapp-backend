const router = require('express').Router();

const Cases = require('./casesModel.js');
const restricted = require('../../auth/restriction.js');

router.get('/', restricted, (req, res) => {
	Cases.find()
		.then(cases => {
			res.status(200).json(cases);
		})
		.catch(err => res.send(err));
});

router.get('/:casesid', restricted, (req, res) => {
	const casesid = req.params.casesid;
	if (!casesid) {
		res.status(404).json({ message: 'The case with the specified casesid does not exist.' });
	} else {
		Cases.findById(casesid)
			.then(onecase => {
				res.status(201).json(onecase);
			})
			.catch(err => {
				res.status(500).json({ message: 'The case information could not be retrieved.' });
			});
	}
});

router.delete('/:casesid', restricted, (req, res) => {
	const casesid = req.params.casesid;
	if (!casesid) {
		res.status(404).json({ message: 'The case with the specified ID does not exist.' });
	}
	Cases.remove(casesid)
		.then(onecase => {
			res.json(onecase);
		})
		.catch(err => {
			res.status(500).json({ message: 'The case could not be removed' });
		});
});

module.exports = router;
