const router = require('express').Router();

const Appearances = require('./appearancesModel.js');
const restricted = require('../../auth/restriction.js');

// GET:  get all appearances for all jobs
router.get('/', restricted, (req, res) => {
	Appearances.find()
		.then(appearances => {
			res.status(200).json(appearances);
		})
		.catch(err => res.send(err));
});

// GET:  get one appearance
router.get('/:appid', restricted, (req, res) => {
	const appid = req.params.appid;
	if (!appid) {
		res.status(404).json({ message: `The appearance with the specified appid ${appid} does not exist.` });
	} else {
		Appearances.findAppsById(appid)
			.then(appearances => {
				res.status(201).json(appearances);
			})
			.catch(err => {
				res.status(500).json({
					message: `The app information for this appearance ${appid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create appearance
router.post('/', restricted, (req, res) => {
	const newAppearance = req.body.appearance;

	Appearances.add(newAppearance)
		.then(appearance => {
			res.status(201).json(appearance);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new appearance.', error: err });
		});
});

// PUT:  update appearance
router.put('/:appid', restricted, (req, res) => {
	const appid = req.params.appid;
	const updatedAppearance = { status: req.body.appearance };

	Appearances.update(appid, updatedAppearance)
		.then(appearance => {
			if (appearance) {
				res.json(appearance);
			} else {
				res.status(404).json({ message: `Could not find appearance with given id ${appid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update appearance.', error: err });
		});
});
// DELETE:  delete appearance
router.delete('/:appid', restricted, (req, res) => {
	const appid = req.params.appid;
	if (!appid) {
		res.status(404).json({ message: `The appearance with the specified ID ${appid} does not exist.` });
	}
	Appearances.remove(appid)
		.then(appearance => {
			res.json(appearance);
		})
		.catch(err => {
			res.status(500).json({ message: 'The appearance could not be removed.', error: err });
		});
});

module.exports = router;
