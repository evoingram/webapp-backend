const router = require('express').Router();

const Courtdates = require('./courtdatesModel.js');
const Appearances = require('./appearancesModel.js');
const Tasks = require('../mgmt/tasksModel.js');
const Citations = require('../authorities/citationsModel.js');
const Shipping = require('../shipping/shippingModel.js');
const Expenses = require('../../financials/expensesModel.js');
const Payments = require('../../financials/paymentsModel.js');
const CommHistory = require('./commHModel.js');
const restricted = require('../../auth/restriction.js');
// also need:
// 		expenses, payments, shipping
// 		citations, tasks, commHistory

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
				Courtdates.findAppsById(courtdatesid).then(appearances => {
					res.status(201).json({
						test: { courtdate },
						general: {
							courtdatesid: courtdate[0].courtdatesid,
							turnaround: courtdate[0].turnaroundtime,
							audiolength: courtdate[0].audiolength,
							duedate: courtdate[0].duedate,
							filed: courtdate[0].filed,
							hearingdetails: {
								location: courtdate[0].location,
								hearingdate: courtdate[0].hearingdate,
								starttime: courtdate[0].hearingstarttime,
								endtime: courtdate[0].hearingendtime,
								hearingtitle: courtdate[0].hearingtitle,
								judgename: courtdate[0].judgename,
								judgetitle: courtdate[0].judgetitle
							}
						},
						financial: {
							invoiceno: courtdate[0].invoiceno,
							rate: courtdate[0].rate,
							invoicedate: courtdate[0].invoicedate,
							duedate: courtdate[0].iduedate,
							discount: courtdate[0].discount,
							reference: courtdate[0].reference,
							paymenttype: courtdate[0].paymenttype,
							factoring: {
								factoring: courtdate[0].factoring,
								factoringcost: courtdate[0].factoringcost
							},
							estimates: {
								estimatedquantity: courtdate[0].estimatedquantity,
								subtotal: courtdate[0].subtotal,
								estimatedadvancedate: courtdate[0].estimatedadvancedate,
								estimatedrebatedate: courtdate[0].estimatedrebatedate
							},
							finals: {
								actualquantity: courtdate[0].actualquantity,
								finalprice: courtdate[0].finalprice
							},
							paypal: {
								ppid: courtdate[0].ppid,
								ppstatus: courtdate[0].ppstatus
							},
							xero: {
								brandingtheme: courtdate[0].brandingtheme,
								itemcode: courtdate[0].itemcode,
								description: courtdate[0].description,
								accountcode: courtdate[0].accountcode,
								taxtype: courtdate[0].taxtype
							},
							expenses: {
								eid: courtdate[0].eid,
								vendor: courtdate[0].vendor,
								date: courtdate[0].date,
								amount: courtdate[0].eamount,
								description: courtdate[0].description
							},
							payments: {
								payment1: {
									pid: courtdate[0].pid,
									amount: courtdate[0].pamount,
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
								customersid: courtdate[0].customersid,
								amount: courtdate[0].amount,
								shippingcost: courtdate[0].shippingcost,
								width: courtdate[0].width,
								length: `${courtdate[0].length}`,
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
						appearances: { appearances },
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
						speakerlist: [],
						agShortcuts: {
							ag1: courtdate[0].ag1,
							ag2: courtdate[0].ag2,
							ag3: courtdate[0].ag3,
							ag4: courtdate[0].ag4,
							ag5: courtdate[0].ag5,
							ag6: courtdate[0].ag6,
							ag11: courtdate[0].ag11,
							ag12: courtdate[0].ag12,
							ag13: courtdate[0].ag13,
							ag14: courtdate[0].ag14,
							ag15: courtdate[0].ag15,
							ag16: courtdate[0].ag16,
							ag21: courtdate[0].ag21,
							ag22: courtdate[0].ag22,
							ag23: courtdate[0].ag23,
							ag24: courtdate[0].ag24,
							ag25: courtdate[0].ag25,
							ag26: courtdate[0].ag26,
							ag31: courtdate[0].ag31,
							ag32: courtdate[0].ag32,
							ag33: courtdate[0].ag33,
							ag34: courtdate[0].ag34,
							ag35: courtdate[0].ag35,
							ag36: courtdate[0].ag36,
							ag41: courtdate[0].ag41,
							ag42: courtdate[0].ag42,
							ag43: courtdate[0].ag43,
							ag44: courtdate[0].ag44,
							ag45: courtdate[0].ag45,
							ag46: courtdate[0].ag46,
							ag51: courtdate[0].ag51,
							ag52: courtdate[0].ag52,
							ag53: courtdate[0].ag53,
							ag54: courtdate[0].ag54,
							ag55: courtdate[0].ag55,
							ag56: courtdate[0].ag56,
							ag61: courtdate[0].ag61,
							ag62: courtdate[0].ag62,
							ag63: courtdate[0].ag63,
							ag64: courtdate[0].ag64,
							ag65: courtdate[0].ag65,
							ag66: courtdate[0].ag66
						},
						status: {
							sid: courtdate[0].sid,
							stage1: {
								jobentered: courtdate[0].jobentered,
								appsentered: courtdate[0].appsentered,
								coverpage: courtdate[0].coverpage,
								autocorrect: courtdate[0].autocorrect,
								schedule: courtdate[0].schedule,
								prepinvoice: courtdate[0].prepinvoice,
								agshortcuts: courtdate[0].agshortcuts
							},
							stage2: {
								transcribe: courtdate[0].transcribe
							},
							stage3: {
								addrdtocover: courtdate[0].addrdtocover,
								findreplacerd: courtdate[0].findreplacerd,
								hyperlink: courtdate[0].hyperlink,
								spellingsemail: courtdate[0].spellingsemail,
								audioproof: courtdate[0].audioproof
							},
							stage4: {
								invoicecompleted: courtdate[0].invoicecompleted,
								noticeofservice: courtdate[0].noticeofservice,
								peletter: courtdate[0].peletter,
								cdlabel: courtdate[0].cdlabel,
								generatezips: courtdate[0].generatezips,
								transcriptsready: courtdate[0].transcriptsready,
								invoicetofactoremail: courtdate[0].invoicetofactoremail,
								filetranscript: courtdate[0].filetranscript,
								burncd: courtdate[0].burncd,
								shippingxmls: courtdate[0].shippingxmls,
								shippingemail: courtdate[0].shippingemail,
								addtrackingno: courtdate[0].addtrackingno
							}
						},
						tasks: {
							stage1: {
								title: courtdate[0].title,
								priority: courtdate[0].priority,
								status: courtdate[0].status,
								description: courtdate[0].description,
								startdate: courtdate[0].tstartdate,
								duedate: courtdate[0].tduedate,
								prioritypoints: courtdate[0].prioritypoints,
								category: courtdate[0].category,
								timelength: courtdate[0].timelength,
								completed: courtdate[0].completed
							},
							stage2: {
								title: courtdate[0].title,
								priority: courtdate[0].priority,
								status: courtdate[0].status,
								description: courtdate[0].description,
								startdate: courtdate[0].tstartdate,
								duedate: courtdate[0].tduedate,
								prioritypoints: courtdate[0].prioritypoints,
								category: courtdate[0].category,
								timelength: courtdate[0].timelength,
								completed: courtdate[0].completed
							},
							stage3: {
								title: courtdate[0].title,
								priority: courtdate[0].priority,
								status: courtdate[0].status,
								description: courtdate[0].description,
								startdate: courtdate[0].tstartdate,
								duedate: courtdate[0].tduedate,
								prioritypoints: courtdate[0].prioritypoints,
								category: courtdate[0].category,
								timelength: courtdate[0].timelength,
								completed: courtdate[0].completed
							},
							stage4: {
								title: courtdate[0].title,
								priority: courtdate[0].priority,
								status: courtdate[0].status,
								description: courtdate[0].description,
								startdate: courtdate[0].tstartdate,
								duedate: courtdate[0].tduedate,
								prioritypoints: courtdate[0].prioritypoints,
								category: courtdate[0].category,
								timelength: courtdate[0].timelength,
								completed: courtdate[0].completed
							}
						}
					});
				});
			})
			.catch(err => {
				res.status(500).json({
					message: 'The courtdate information could not be retrieved.',
					error: err
				});
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

router.get('/apps/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: 'The courtdate with the specified courtdatesid does not exist.' });
	} else {
		Courtdates.findAppsById(courtdatesid)
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
