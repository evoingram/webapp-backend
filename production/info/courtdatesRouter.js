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
		Courtdates.findByIdMain(courtdatesid)
			.then(courtdate => {
				res.status(201).json({
					test: { courtdate },
					general: {
						courtdatesid: courtdate[0].courtdatesid,
						ttid: courtdate[0].ttid,
						turnaround: courtdate[0].pushturnaround,
						hearingdate: courtdate[0].hearingdate,
						starttime: courtdate[0].hearingstarttime,
						endtime: courtdate[0].hearingendtime,
						audiolength: courtdate[0].audiolength,
						location: courtdate[0].location,
						duedate: courtdate[0].duedate,
						filed: courtdate[0].filed,
						hearingtitle: courtdate[0].hearingtitle,
						judgename: courtdate[0].judgename,
						judgetitle: courtdate[0].judgetitle
					},
					financial: {
						invoiceno: courtdate[0].invoiceno,
						rate: courtdate[0].rate,
						ratesid: courtdate[0].ratesid,
						brandingtheme: courtdate[0].brandingtheme,
						btid: courtdate[0].btid,
						paymenttype: courtdate[0].paymenttype,
						factoringcost: courtdate[0].factoringcost,
						estimatedquantity: courtdate[0].estimatedquantity,
						actualquantity: courtdate[0].actualquantity,
						subtotal: courtdate[0].subtotal,
						finalprice: courtdate[0].finalprice,
						estimatedadvancedate: courtdate[0].estimatedadvancedate,
						estimatedrebatedate: courtdate[0].estimatedrebatedate,
						ppid: courtdate[0].ppid,
						ppstatus: courtdate[0].ppstatus,
						discount: courtdate[0].discount,
						reference: courtdate[0].reference,
						invoicedate: courtdate[0].invoicedate,
						duedate: courtdate[0].duedate,
						itemcode: courtdate[0].itemcode,
						description: courtdate[0].description,
						accountcode: courtdate[0].accountcode,
						taxtype: courtdate[0].taxtype,
						expenses: {
							expense1: {
								eid: courtdate[0].eid,
								vendor: courtdate[0].vendor,
								date: courtdate[0].date,
								amount: courtdate[0].amount,
								description: courtdate[0].description
							}
						},
						payments: {
							payment1: {
								pid: courtdate[0].pid,
								amount: courtdate[0].amount,
								remitdate: courtdate[0].remitdate
							}
						}
					},
					case: {
						party1: courtdate[0].party1,
						party1name: courtdate[0].party1name,
						party2: courtdate[0].party2,
						party2name: courtdate[0].party2name,
						casenumber1: courtdate[0].casenumber1,
						casenumber2: courtdate[0].casenumber2,
						jurisdiction: courtdate[0].jurisdiction,
						notes: courtdate[0].notes
					},
					shipping: {
						package1: {
							shipdate: courtdate[0].shipdate,
							trackingno: courtdate[0].trackingno,
							soid: courtdate[0].soid,
							mcid: courtdate[0].mcid,
							mailclass: courtdate[0].mailclass,
							ptid: courtdate[0].ptid,
							packagetype: courtdate[0].packagetype,
							customerid: courtdate[0].customerid,
							amount: courtdate[0].amount,
							shippingcost: courtdate[0].shippingcost,
							width: courtdate[0].width,
							lengthb: courtdate[0].lengthb,
							height: courtdate[0].height,
							prioritymailexpress1030: courtdate[0].prioritymailexpress1030,
							holidaydelivery: courtdate[0].holidaydelivery,
							sundaydelivery: courtdate[0].sundaydelivery,
							saturdaydelivery: courtdate[0].saturdaydelivery,
							signaturerequired: courtdate[0].signaturerequired,
							stealth: courtdate[0].stealth,
							replypostage: courtdate[0].replypostage,
							insuredmail: courtdate[0].insuredmail,
							cod: courtdate[0].cod,
							restricteddelivery: courtdate[0].restricteddelivery,
							adultsigrestricted: courtdate[0].adultsigrestricted,
							adultsigrequired: courtdate[0].adultsigrequired,
							returnreceipt: courtdate[0].returnreceipt,
							certifiedmail: courtdate[0].certifiedmail,
							sigconfirmation: courtdate[0].sigconfirmation,
							uspstracking: courtdate[0].uspstracking,
							reference: courtdate[0].reference,
							value: courtdate[0].value,
							description: courtdate[0].description,
							weightoz: courtdate[0].weightoz,
							output: courtdate[0].output
						}
					},
					appearances: {
						speakerlist: [],
						ordering: {
							customersid: courtdate[0].customersid,
							factoring: courtdate[0].factoring,
							company: courtdate[0].company,
							mrms: courtdate[0].mrms,
							lastname: courtdate[0].lastname,
							firstname: courtdate[0].firstname,
							email: courtdate[0].email,
							jobtitle: courtdate[0].jobtitle,
							businessphone: courtdate[0].businessphone,
							address1: courtdate[0].address1,
							address2: courtdate[0].address2,
							city: courtdate[0].city,
							state: courtdate[0].state,
							zip: courtdate[0].zip,
							notes: courtdate[0].notes
						},
						appearance1: {
							customersid: courtdate[0].customersid,
							factoring: courtdate[0].factoring,
							company: courtdate[0].company,
							mrms: courtdate[0].mrms,
							lastname: courtdate[0].lastname,
							firstname: courtdate[0].firstname,
							email: courtdate[0].email,
							jobtitle: courtdate[0].jobtitle,
							businessphone: courtdate[0].businessphone,
							address1: courtdate[0].address1,
							address2: courtdate[0].address2,
							city: courtdate[0].city,
							state: courtdate[0].state,
							zip: courtdate[0].zip,
							notes: courtdate[0].notes
						}
					},
					citations: {
						citation1: {
							findcitation: courtdate[0].findcitation,
							replacehyperlink: courtdate[0].replacehyperlink,
							longcitation: courtdate[0].longcitation,
							chcategory: courtdate[0].chcategory,
							webaddress: courtdate[0].webaddress
						}
					},
					commHistory: {
						comm1: {
							chid: courtdate[0].chid,
							filepath: courtdate[0].filepath,
							datecreated: courtdate[0].datecreated,
							customersid: courtdate[0].customersid
						}
					},
					agShortcuts: {
						ag1: courtdate[0].ag1,
						ag2: courtdate[0].ag2
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
