const router = require('express').Router();

const MailClass = require('./mailclassModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../../auth/restrictionA.js');
const restrictedC = require('../../auth/restrictionC.js');
const restrictedM = require('../../auth/restrictionM.js');

// GET:  get all mailclasses
router.get('/', restrictedC, (req, res) => {
	MailClass.find()
		.then(mailclasses => {
			res.status(200).json(mailclasses);
		})
		.catch(err => res.send(err));
});

// GET:  get one mailclass
router.get('/:mcid', restricted, (req, res) => {
	const mcid = req.params.mcid;
	if (!mcid) {
		res.status(404).json({
			message: `The mailclass with the specified mcid ${mcid} does not exist.`,
			error: err
		});
	} else {
		MailClass.findById(mcid)
			.then(mailclass => {
				res.status(200).json(mailclass);
			})
			.catch(err => {
				res.status(500).json({ message: `The mailclass information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create a mailclass
router.post('/', restrictedM, (req, res) => {
	const newMailClass = req.body;

	MailClass.add(newMailClass)
		.then(mailclass => {
			res.status(201).json(mailclass);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new mailclass.`, error: err });
		});
});

// PUT:  update a mailclass
router.put('/:mcid', restrictedM, (req, res) => {
	const mcid = req.params.mcid;
	const updatedMailClass = req.body;

	MailClass.update(mcid, updatedMailClass)
		.then(mailclass => {
			if (mailclass) {
				res.json(mailclass);
			} else {
				res.status(404).json({ message: `Could not find mailclass with given id ${mcid}.`, error: err });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update mailclass.`, error: err });
		});
});
// DELETE:  delete a mailclass
router.delete('/:mcid', restrictedM, (req, res) => {
	const mcid = req.params.mcid;
	if (!mcid) {
		res.status(404).json({ message: `The mailclass with the specified ID ${mcid} does not exist.`, error: err });
	}
	MailClass.remove(mcid)
		.then(mailclass => {
			res.json(mailclass);
		})
		.catch(err => {
			res.status(500).json({ message: `The mailclass could not be removed`, error: err });
		});
});

module.exports = router;
