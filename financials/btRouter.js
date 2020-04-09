const router = require('express').Router();

const BrandingThemes = require('./btModel.js');
const restricted = require('../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  gets all brandingthemes
router.get('/', restrictedM, (req, res) => {
	BrandingThemes.find()
		.then(brandingtheme => {
			res.status(200).json(brandingtheme);
		})
		.catch(err => res.send(err));
});

// GET:  gets one brandingtheme
router.get('/:btid', restricted, (req, res) => {
	const btid = req.params.btid;
	if (!btid) {
		res.status(404).json({
			message: `The brandingtheme with the specified courtdatesid ${btid} does not exist.`
		});
	} else {
		BrandingThemes.findById(btid)
			.then(brandingtheme => {
				res.status(200).json(brandingtheme);
			})
			.catch(err => {
				res.status(500).json({ message: 'The courtdate information could not be retrieved.', error: err });
			});
	}
});

// POST:  create brandingtheme
router.post('/', restrictedM, (req, res) => {
	const newBrandingTheme = req.body;

	BrandingThemes.add(newBrandingTheme)
		.then(brandingtheme => {
			res.status(201).json(brandingtheme);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new brandingtheme', error: err });
		});
});

// PUT:  update brandingtheme
router.put('/:btid', restrictedM, (req, res) => {
	const btid = req.params.btid;
	const updatedBrandingTheme = req.body;

	BrandingThemes.update(btid, updatedBrandingTheme)
		.then(brandingtheme => {
			if (brandingtheme) {
				res.json(brandingtheme);
			} else {
				res.status(404).json({ message: 'Could not find brandingtheme with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update brandingtheme', error: err });
		});
});
// DELETE:  delete brandingtheme
router.delete('/:btid', restrictedM, (req, res) => {
	const btid = req.params.btid;
	if (!btid) {
		res.status(404).json({ message: 'The brandingtheme with the specified ID does not exist.' });
	}
	BrandingThemes.remove(btid)
		.then(brandingtheme => {
			res.json(brandingtheme);
		})
		.catch(err => {
			res.status(500).json({ message: `The courtdate ${btid} could not be removed`, error: err });
		});
});

module.exports = router;
