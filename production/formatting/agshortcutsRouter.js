const router = require("express").Router();

const AGShortcuts = require("./agshortcutsModel.js");
const restricted = require("../../auth/restriction.js");
const restrictedA = require("../../auth/restrictionA.js");
const restrictedC = require("../../auth/restrictionC.js");
const restrictedM = require("../../auth/restrictionM.js");

// GET: get all agshortcut lists
router.get("/", restrictedC, (req, res) => {
	AGShortcuts.find()
		.then((agshortcuts) => {
			res.status(200).json(agshortcuts);
		})
		.catch((err) => res.send(err));
});

// GET:  get one agshortcuts list
router.get("/:agsid", restrictedC, (req, res) => {
	const agsid = req.params.agsid;
	if (!agsid) {
		res.status(404).json({
			message: `The agshortcut with the specified agsid ${agsid} does not exist.`
		});
	} else {
		AGShortcuts.findById(agsid)
			.then((agshortcut) => {
				res.status(200).json(agshortcut);
			})
			.catch((err) => {
				res.status(500).json({
					message: "The agshortcut list information could not be retrieved.",
					error: err
				});
			});
	}
});

// POST:  create an agshortcuts list
router.post("/", restrictedC, (req, res) => {
	const newAGShortcut = req.body;

	AGShortcuts.add(newAGShortcut)
		.then((agshortcut) => {
			res.status(201).json(agshortcut);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to create new agshortcut list.", error: err });
		});
});

// PUT:  update an agshortcuts list
router.put("/:agsid", restrictedC, (req, res) => {
	const agsid = req.params.agsid;
	const updatedAGShortcut = req.body;

	AGShortcuts.update(agsid, updatedAGShortcut)
		.then((agshortcut) => {
			if (agshortcut) {
				res.json(agshortcut);
			} else {
				res.status(404).json({ message: `Could not find agshortcut list with given id ${agsid}.` });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to update agshortcut list.", error: err });
		});
});
// DELETE:  delete an agshortcuts list
router.delete("/:agsid", restrictedM, (req, res) => {
	const agsid = req.params.agsid;
	if (!agsid) {
		res.status(404).json({
			message: `The agshortcut list with the specified ID ${agsid} does not exist.`
		});
	}
	AGShortcuts.remove(agsid)
		.then((agshortcut) => {
			res.json(agshortcut);
		})
		.catch((err) => {
			res.status(500).json({ message: "The agshortcut list could not be removed.", error: err });
		});
});

module.exports = router;
