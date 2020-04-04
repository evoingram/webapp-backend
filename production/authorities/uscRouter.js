const router = require('express').Router();

const USCCitations = require('./Model.js');
const restricted = require('../auth/restriction.js');

// GET:  get all usc citaitons
router.get('/', restricted, (req, res) => {
	USCCitations.find()
		.then(uscs => {
			res.status(200).json(uscs);
		})
		.catch(err => res.send(err));
});

// GET:  get one usc citaiton
router.get('/:uscid', restricted, (req, res) => {
	const uscid = req.params.uscid;
	if (!uscid) {
		res.status(404).json({ message: `The uscitem with the specified uscid ${uscid} does not exist.`, error: err });
	} else {
		USCCitations.findById(uscid)
			.then(uscitem => {
				res.status(201).json(uscitem);
			})
			.catch(err => {
				res.status(500).json({ message: `The uscitem information could not be retrieved.`, error: err });
			});
	}
});

// POST:  create a usc citation
router.post('/', restricted, (req, res) => {
	const newUSCCodeItem = req.body.uscCodeItem;

	USCCitations.add(newUSCCodeItem)
		.then(uscitem => {
			res.status(201).json(uscitem);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new uscitem.`, error: err });
		});
});

// PUT:  update a usc citation
router.put('/:uscid', restricted, (req, res) => {
	const uscid = req.params.uscid;
	const updatedUSCCodeItem = { usc: req.body.usc };

	USCCitations.update(uscid, updatedUSCCodeItem)
		.then(uscitem => {
			if (uscitem) {
				res.json(uscitem);
			} else {
				res.status(404).json({ message: `Could not find uscitem with given id ${uscid}.`, error: err });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update uscitem.`, error: err });
		});
});
// DELETE:  delete a usc citation
router.delete('/:uscid', restricted, (req, res) => {
	const uscid = req.params.uscid;
	if (!uscid) {
		res.status(404).json({ message: `The uscitem with the specified ID ${uscid} does not exist.`, error: err });
	}
	USCCitations.remove(uscid)
		.then(uscitem => {
			res.json(uscitem);
		})
		.catch(err => {
			res.status(500).json({ message: `The uscitem could not be removed`, error: err });
		});
});

module.exports = router;
