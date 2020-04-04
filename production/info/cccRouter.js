const router = require('express').Router();

const CourtdatesCasesCustomers = require('./cccModel.js');
const restricted = require('../../auth/restriction.js');

// GET:  get all courtdatescasescustomers (ties the three tables together)
router.get('/', restricted, (req, res) => {
	CourtdatesCasesCustomers.find()
		.then(courtdatescasescustomers => {
			res.status(200).json(courtdatescasescustomers);
		})
		.catch(err => res.send(err));
});

// GET:  get one entry from courtdatescasescustomers (ties the three tables together)
router.get('/:cdccid', restricted, (req, res) => {
	const cdccid = req.params.cdccid;
	if (!cdccid) {
		res.status(404).json({
			message: `The courtdatecasecustomer with the specified cdccid ${cdccid} does not exist.`
		});
	} else {
		CourtdatesCasesCustomers.findById(cdccid)
			.then(courtdatescasescustomers => {
				res.status(201).json(courtdatescasescustomers);
			})
			.catch(err => {
				res.status(500).json({
					message: `The courtdatecasecustomer information for this courtdatecasecustomer ${cdccid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create an entry in courtdatescasescustomers (ties the three tables together)
router.post('/', restricted, (req, res) => {
	const newCourtdateCaseCustomer = req.body.courtdatecasecustomer;

	CourtdatesCasesCustomers.add(newCourtdateCaseCustomer)
		.then(courtdatecasecustomer => {
			res.status(201).json(courtdatecasecustomer);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new courtdatecasecustomer.`, error: err });
		});
});

// PUT:  update an entry in courtdatescasescustomers (ties the three tables together)
router.put('/:cdccid', restricted, (req, res) => {
	const cdccid = req.params.cdccid;
	const updatedCourtdateCaseCustomer = { courtdatecasecustomer: req.body.courtdatecasecustomer };

	CourtdatesCasesCustomers.update(cdccid, updatedCourtdateCaseCustomer)
		.then(courtdatecasecustomer => {
			if (courtdatecasecustomer) {
				res.json(courtdatecasecustomer);
			} else {
				res.status(404).json({ message: `Could not find courtdatecasecustomer with given id ${cdccid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update courtdatecasecustomer.`, error: err });
		});
});
// DELETE:  delete an entry in courtdatescasescustomers (ties the three tables together)
router.delete('/:cdccid', restricted, (req, res) => {
	const cdccid = req.params.cdccid;
	if (!cdccid) {
		res.status(404).json({ message: `The courtdatecasecustomer with the specified ID ${cdccid} does not exist.` });
	}
	CourtdatesCasesCustomers.remove(cdccid)
		.then(courtdatecasecustomer => {
			res.json(courtdatecasecustomer);
		})
		.catch(err => {
			res.status(500).json({ message: `The courtdatecasecustomer could not be removed.`, error: err });
		});
});

module.exports = router;
