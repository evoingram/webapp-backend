const router = require('express').Router();

const Citations = require('./citationsModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../../auth/restrictionA.js');
const restrictedC = require('../../auth/restrictionC.js');
const restrictedM = require('../../auth/restrictionM.js');

// GET:  get all citations
router.get('/', restrictedC, (req, res) => {
	Citations.find()
		.then(citations => {
			res.status(200).json(citations);
		})
		.catch(err => res.send(err));
});

// GET:  get one citation
router.get('/:citationsid', restricted, (req, res) => {
	const citationsid = req.params.citationsid;
	if (!citationsid) {
		res.status(404).json({
			message: `The citation with the specified citationsid ${citationsid} does not exist.`,
			error: err
		});
	} else {
		Citations.findById(citationsid)
			.then(citation => {
				res.status(200).json(citation);
			})
			.catch(err => {
				res.status(500).json({ message: `The citation information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create a citation
router.post('/', restrictedC, (req, res) => {
	const newCitation = req.body;

	Citations.add(newCitation)
		.then(citation => {
			res.status(201).json(citation);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new citation.`, error: err });
		});
});

// PUT:  update a citation
router.put('/:citationsid', restrictedM, (req, res) => {
	const citationsid = req.params.citationsid;
	const updatedCitation = req.body;

	Citations.update(citationsid, updatedCitation)
		.then(citation => {
			if (citation) {
				res.json(citation);
			} else {
				res.status(404).json({ message: `Could not find citation with given id ${citationsid}.`, error: err });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update citation.`, error: err });
		});
});
// DELETE:  delete a citation
router.delete('/:citationsid', restrictedM, (req, res) => {
	const citationsid = req.params.citationsid;
	if (!citationsid) {
		res.status(404).json({
			message: `The citation with the specified ID ${citationsid} does not exist.`,
			error: err
		});
	}
	Citations.remove(citationsid)
		.then(citation => {
			res.json(citation);
		})
		.catch(err => {
			res.status(500).json({ message: `The citation could not be removed`, error: err });
		});
});

module.exports = router;
