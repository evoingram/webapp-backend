const router = require('express').Router();

const AGShortcuts = require('./agshortcutsModel.js');
const restricted = require('../../auth/restriction.js');

// GET: get all agshortcut lists
router.get('/', restricted, (req, res) => {
	AGShortcuts.find()
		.then(agshortcuts => {
			res.status(200).json(agshortcuts);
		})
		.catch(err => res.send(err));
});

// GET:  get one agshortcuts list
router.get('/:agsid', restricted, (req, res) => {
	const agsid = req.params.agsid;
	if (!agsid) {
		res.status(404).json({
			message: `The agshortcut with the specified agsid ${agsid} does not exist.`,
			error: err
		});
	} else {
		AGShortcuts.findById(agsid)
			.then(agshortcut => {
				res.status(201).json(agshortcut);
			})
			.catch(err => {
				res.status(500).json({
					message: `The agshortcut list information could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create an agshortcuts list
router.post('/', restricted, (req, res) => {
	const newAGShortcut = req.body.agshortcut;

	AGShortcuts.add(newAGShortcut)
		.then(agshortcut => {
			res.status(201).json(agshortcut);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new agshortcut list.`, error: err });
		});
});

// PUT:  update an agshortcuts list
router.put('/:agsid', restricted, (req, res) => {
	const agsid = req.params.agsid;
	const updatedAGShortcut = { agshortcut: req.body.agshortcut };

	AGShortcuts.update(agsid, updatedAGShortcut)
		.then(agshortcut => {
			if (agshortcut) {
				res.json(agshortcut);
			} else {
				res.status(404).json({ message: `Could not find agshortcut list with given id ${agsid}.`, error: err });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update agshortcut list.`, error: err });
		});
});
// DELETE:  delete an agshortcuts list
router.delete('/:agsid', restricted, (req, res) => {
	const agsid = req.params.agsid;
	if (!agsid) {
		res.status(404).json({
			message: `The agshortcut list with the specified ID ${agsid} does not exist.`,
			error: err
		});
	}
	AGShortcuts.remove(agsid)
		.then(agshortcut => {
			res.json(agshortcut);
		})
		.catch(err => {
			res.status(500).json({ message: `The agshortcut list could not be removed.`, error: err });
		});
});

module.exports = router;
