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
					{
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
							taxtype: courtdate.taxtype,
							expenses: {
								expense1: {
									eid: courtdate.eid,
									vendor: courtdate.vendor,
									date: courtdate.date,
									amount: courtdate.amount,
									description: courtdate.description
								}
							},
							payments: {
								payment1: {
									pid: courtdate.pid,
									amount: courtdate.amount,
									remitdate: courtdate.remitdate
								}
							}
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
						shipping: {
							package1: {
								shipdate: courtdate.shipdate,
								trackingno: courtdate.trackingno,
								soid: courtdate.soid,
								mcid: courtdate.mcid,
								mailclass: courtdate.mailclass,
								ptid: courtdate.ptid,
								packagetype: courtdate.packagetype,
								customerid: courtdate.customerid,
								amount: courtdate.amount,
								shippingcost: courtdate.shippingcost,
								width: courtdate.width,
								length: courtdate.length,
								height: courtdate.height,
								prioritymailexpress1030: courtdate.prioritymailexpress1030,
								holidaydelivery: courtdate.holidaydelivery,
								sundaydelivery: courtdate.sundaydelivery,
								saturdaydelivery: courtdate.saturdaydelivery,
								signaturerequired: courtdate.signaturerequired,
								stealth: courtdate.stealth,
								replypostage: courtdate.replypostage,
								insuredmail: courtdate.insuredmail,
								cod: courtdate.cod,
								restricteddelivery: courtdate.restricteddelivery,
								adultsigrestricted: courtdate.adultsigrestricted,
								adultsigrequired: courtdate.adultsigrequired,
								returnreceipt: courtdate.returnreceipt,
								certifiedmail: courtdate.certifiedmail,
								sigconfirmation: courtdate.sigconfirmation,
								uspstracking: courtdate.uspstracking,
								reference: courtdate.reference,
								value: courtdate.value,
								description: courtdate.description,
								weightoz: courtdate.weightoz,
								output: courtdate.output
							}
						},
						appearances: {
							speakerlist: [],
							ordering: {
								customersid: courtdate.customersid,
								factoring: courtdate.factoring,
								company: courtdate.company,
								mrms: courtdate.mrms,
								lastname: courtdate.lastname,
								firstname: courtdate.firstname,
								email: courtdate.email,
								jobtitle: courtdate.jobtitle,
								businessphone: courtdate.businessphone,
								address1: courtdate.address1,
								address2: courtdate.address2,
								city: courtdate.city,
								state: courtdate.state,
								zip: courtdate.zip,
								notes: courtdate.notes
							},
							appearance1: {
								customersid: courtdate.customersid,
								factoring: courtdate.factoring,
								company: courtdate.company,
								mrms: courtdate.mrms,
								lastname: courtdate.lastname,
								firstname: courtdate.firstname,
								email: courtdate.email,
								jobtitle: courtdate.jobtitle,
								businessphone: courtdate.businessphone,
								address1: courtdate.address1,
								address2: courtdate.address2,
								city: courtdate.city,
								state: courtdate.state,
								zip: courtdate.zip,
								notes: courtdate.notes
							}
						},
						citations: {
							citation1: {
								findcitation: courtdate.findcitation,
								replacehyperlink: courtdate.replacehyperlink,
								longcitation: courtdate.longcitation,
								chcategory: courtdate.chcategory,
								webaddress: courtdate.webaddress
							}
						},
						commHistory: {
							comm1: {
								chid: courtdate.chid,
								filepath: courtdate.filepath,
								datecreated: courtdate.datecreated,
								customersid: courtdate.customersid
							}
						},
						agShortcuts: {
							ag1: courtdate.ag1,
							ag2: courtdate.ag2
						},
						status: {
							stage1: {},
							stage2: {},
							stage3: {},
							stage4: {}
						},
						tasks: {}
					}
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
