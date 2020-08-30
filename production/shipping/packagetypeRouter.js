const router = require("express").Router();

const PackageType = require("./packagetypeModel.js");
const restricted = require("../../auth/restriction.js");
const restrictedA = require("../../auth/restrictionA.js");
const restrictedC = require("../../auth/restrictionC.js");
const restrictedM = require("../../auth/restrictionM.js");

// GET:  get all packagetypes
router.get("/", restrictedM, (req, res) => {
	PackageType.find()
		.then((packagetypes) => {
			res.status(200).json(packagetypes);
		})
		.catch((err) => res.send(err));
});

// GET:  get one packagetype
router.get("/:ptid", restricted, (req, res) => {
	const ptid = req.params.ptid;
	if (!ptid) {
		res.status(404).json({
			message: `The packagetype with the specified ptid ${ptid} does not exist.`
		});
	} else {
		PackageType.findById(ptid)
			.then((packagetype) => {
				res.status(200).json(packagetype);
			})
			.catch((err) => {
				res.status(500).json({ message: "The packagetype information could not be retrieved.", error: err });
			});
	}
});

// POST:  create a packagetype
router.post("/", restrictedM, (req, res) => {
	const newPackageType = req.body;

	PackageType.add(newPackageType)
		.then((packagetype) => {
			res.status(201).json(packagetype);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to create new packagetype.", error: err });
		});
});

// PUT:  update a packagetype
router.put("/:ptid", restrictedM, (req, res) => {
	const ptid = req.params.ptid;
	const updatedPackageType = req.body;

	PackageType.update(ptid, updatedPackageType)
		.then((packagetype) => {
			if (packagetype) {
				res.json(packagetype);
			} else {
				res.status(404).json({
					message: `Could not find packagetype with given id ${ptid}`
				});
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to update packagetype.", error: err });
		});
});
// DELETE:  delete a packagetype
router.delete("/:ptid", restrictedM, (req, res) => {
	const ptid = req.params.ptid;
	if (!ptid) {
		res.status(404).json({
			message: `The packagetype with the specified ID ${ptid} does not exist.`
		});
	}
	PackageType.remove(ptid)
		.then((packagetype) => {
			res.json(packagetype);
		})
		.catch((err) => {
			res.status(500).json({ message: "The packagetype could not be removed.", error: err });
		});
});

module.exports = router;
