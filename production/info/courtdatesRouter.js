const router = require('express').Router();

const Courtdates = require('./courtdatesModel.js');
const restricted = require('../../auth/restriction.js');

router.get('/', restricted, (req, res) => {
	Courtdates.find()
		.then(courtdates => {
			res.status(200).json(courtdates);
		})
		.catch(err => res.send(err));
});
router.get('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: 'The courtdate with the specified courtdatesid does not exist.' });
	} else {
		Courtdates.findById(courtdatesid)
			.then(courtdate => {
				res.status(201).json({
					general: {
						courtdatesid: courtdate.courtdatesid,
						ttid: courtdate.ttid,
						turnaround: courtdate.turnaround,
						hearingdate: courtdate.hearingdate,
						starttime: courtdate.hearingstarttime,
						endtime: courtdate.hearingendtime,
						audiolength: courtdate.audiolength,
						location: courtdate.location,
						duedate: courtdate.duedate,
						filed: courtdate.filed,
						hearingtitle: courtdate.hearingtitle,
						judgename: courtdate.judgename,
						judgetitle: courtdate.judgetitle
					},
					financial: {
						invoiceno: courtdate.invoiceno,
						rate: courtdate.rate,
						ratesid: courtdate.ratesid,
						brandingtheme: courtdate.brandingtheme,
						btid: courtdate.btid,
						paymenttype: courtdate.paymenttype,
						factoringcost: courtdate.factoringcost,
						estimatedquantity: courtdate.estimatedquantity,
						actualquantity: courtdate.actualquantity,
						subtotal: courtdate.subtotal,
						finalprice: courtdate.finalprice,
						estimatedadvancedate: courtdate.estimatedadvancedate,
						estimatedrebatedate: courtdate.estimatedrebatedate,
						ppid: courtdate.ppid,
						ppstatus: courtdate.ppstatus,
						discount: courtdate.discount,
						reference: courtdate.reference,
						invoicedate: courtdate.invoicedate,
						duedate: courtdate.duedate,
						itemcode: courtdate.itemcode,
						description: courtdate.description,
						accountcode: courtdate.accountcode,
						taxtype: courtdate.taxtype
					},
					case: {
						party1: courtdate.party1,
						party1name: courtdate.party1name,
						party2: courtdate.party2,
						party2name: courtdate.party2name,
						casenumber1: courtdate.casenumber1,
						casenumber2: courtdate.casenumber2,
						jurisdiction: courtdate.jurisdiction,
						notes: courtdate.notes
					},

					status: {
						stage1: {},
						stage2: {},
						stage3: {},
						stage4: {}
					},
					tasks: {}
				});
			})
			.catch(err => {
				res.status(500).json({ message: 'The courtdate information could not be retrieved.' });
			});
	}
});

router.get('/basic/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: 'The courtdate with the specified courtdatesid does not exist.' });
	} else {
		Courtdates.findById(courtdatesid)
			.then(courtdate => {
				res.status(201).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({ message: 'The courtdate information could not be retrieved.' });
			});
	}
});

router.delete('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: 'The courtdate with the specified ID does not exist.' });
	}
	Courtdates.remove(courtdatesid)
		.then(courtdate => {
			res.json(courtdate);
		})
		.catch(err => {
			res.status(500).json({ message: 'The courtdate could not be removed' });
		});
});

module.exports = router;
