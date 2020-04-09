const router = require('express').Router();

const CitationHyperlinks = require('./citationhyperlinksModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  get all citationhyperlinks citations
router.get('/', restrictedM, (req, res) => {
	CitationHyperlinks.find()
		.then(citationhyperlinks => {
			res.status(200).json(citationhyperlinks);
		})
		.catch(err => res.send(err));
});

// GET:  get one citationhyperlinks citaiton
router.get('/:chid', restricted, (req, res) => {
	const chid = req.params.chid;
	if (!chid) {
		res.status(404).json({
			message: `The citationhyperlinksitem with the specified chid ${chid} does not exist.`,
			error: err
		});
	} else {
		CitationHyperlinks.findById(chid)
			.then(citationhyperlinksitem => {
				res.status(200).json(citationhyperlinksitem);
			})
			.catch(err => {
				res.status(500).json({
					message: `The citationhyperlinksitem information could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create a citationhyperlinks citation
router.post('/', restrictedC, (req, res) => {
	const newUSCCodeItem = req.body;

	CitationHyperlinks.add(newUSCCodeItem)
		.then(citationhyperlinksitem => {
			res.status(201).json(citationhyperlinksitem);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new citationhyperlinksitem.`, error: err });
		});
});

// PUT:  update a citationhyperlinks citation
router.put('/:chid', restrictedC, (req, res) => {
	const chid = req.params.chid;
	const updatedUSCCodeItem = req.body;

	CitationHyperlinks.update(chid, updatedUSCCodeItem)
		.then(citationhyperlinksitem => {
			if (citationhyperlinksitem) {
				res.json(citationhyperlinksitem);
			} else {
				res.status(404).json({
					message: `Could not find citationhyperlinksitem with given id ${chid}.`,
					error: err
				});
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update citationhyperlinksitem.`, error: err });
		});
});
// DELETE:  delete a citationhyperlinks citation
router.delete('/:chid', restrictedM, (req, res) => {
	const chid = req.params.chid;
	if (!chid) {
		res.status(404).json({
			message: `The citationhyperlinksitem with the specified ID ${chid} does not exist.`,
			error: err
		});
	}
	CitationHyperlinks.remove(chid)
		.then(citationhyperlinksitem => {
			res.json(citationhyperlinksitem);
		})
		.catch(err => {
			res.status(500).json({ message: `The citationhyperlinksitem could not be removed`, error: err });
		});
});

module.exports = router;
