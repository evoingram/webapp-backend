const router = require('express').Router();

const Courtdates = require('./courtdatesModel.js');
const restricted = require('../../auth/restriction.js');
const restrictedA = require('../auth/restrictionA.js');
const restrictedC = require('../auth/restrictionC.js');
const restrictedM = require('../auth/restrictionM.js');

// GET:  returns all courtdates
router.get('/', restricted, (req, res) => {
	Courtdates.find()
		.then(courtdates => {
			res.status(200).json(courtdates);
		})
		.catch(err => res.send(err));
});

// GET:  returns info for one job/courtdate
router.get('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findByIdMain(courtdatesid)
			.then(courtdate => {
				if (!courtdate) {
					res.status(404).json({
						message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
						error: err
					});
				}
				Courtdates.findAppsById(courtdatesid).then(appearances => {
					if (!appearances) {
						appearances = [];
					} else {
						Courtdates.findPaymentsById(courtdatesid).then(payments => {
							if (!payments) {
								payments = [];
							} else {
								Courtdates.findExpensesById(courtdatesid).then(expenses => {
									if (!expenses) {
										expenses = [];
									} else {
										Courtdates.getShippingById(courtdatesid).then(shipping => {
											if (!shipping) {
												shipping = [];
											} else {
												Courtdates.findCommHistoryById(courtdatesid).then(commhistory => {
													if (!commhistory) {
														commhistory = [];
													} else {
														Courtdates.findTasksById(courtdatesid).then(tasks => {
															if (!tasks) {
																tasks = [];
															} else {
																Courtdates.findCitationsById(courtdatesid).then(
																	citations => {
																		if (!citations) {
																			citations = [];
																		} else {
																			Courtdates.findInvoicesById(
																				courtdatesid
																			).then(invoices => {
																				if (!invoices) {
																					invoices = [];
																				} else {
																					res.status(200).json({
																						general: {
																							courtdatesid:
																								courtdate[0]
																									.courtdatesid,
																							turnaround:
																								courtdate[0]
																									.turnaroundtime,
																							audiolength:
																								courtdate[0]
																									.audiolength,
																							duedate:
																								courtdate[0].duedate,
																							filed: courtdate[0].filed,
																							hearingdetails: {
																								location:
																									courtdate[0]
																										.location,
																								hearingdate:
																									courtdate[0]
																										.hearingdate,
																								starttime:
																									courtdate[0]
																										.hearingstarttime,
																								endtime:
																									courtdate[0]
																										.hearingendtime,
																								hearingtitle:
																									courtdate[0]
																										.hearingtitle,
																								judgename:
																									courtdate[0]
																										.judgename,
																								judgetitle:
																									courtdate[0]
																										.judgetitle
																							}
																						},
																						financial: {
																							invoiceno:
																								courtdate[0].invoiceno,
																							rate: courtdate[0].rate,
																							invoicedate:
																								courtdate[0]
																									.invoicedate,
																							duedate:
																								courtdate[0].iduedate,
																							discount:
																								courtdate[0].discount,
																							reference:
																								courtdate[0].reference,
																							paymenttype:
																								courtdate[0]
																									.paymenttype,
																							factoring: {
																								factoring:
																									courtdate[0]
																										.factoring,
																								factoringcost:
																									courtdate[0]
																										.factoringcost
																							},
																							invoices: invoices,
																							estimates: {
																								estimatedquantity:
																									courtdate[0]
																										.estimatedquantity,
																								subtotal:
																									courtdate[0]
																										.subtotal,
																								estimatedadvancedate:
																									courtdate[0]
																										.estimatedadvancedate,
																								estimatedrebatedate:
																									courtdate[0]
																										.estimatedrebatedate
																							},
																							finals: {
																								actualquantity:
																									courtdate[0]
																										.actualquantity,
																								finalprice:
																									courtdate[0]
																										.finalprice
																							},
																							paypal: {
																								ppid: courtdate[0].ppid,
																								ppstatus:
																									courtdate[0]
																										.ppstatus
																							},
																							xero: {
																								brandingtheme:
																									courtdate[0]
																										.brandingtheme,
																								itemcode:
																									courtdate[0]
																										.itemcode,
																								description:
																									courtdate[0]
																										.description,
																								accountcode:
																									courtdate[0]
																										.accountcode,
																								taxtype:
																									courtdate[0].taxtype
																							},
																							expenses: expenses,
																							payments: payments
																						},
																						case: {
																							party1: courtdate[0].party1,
																							party1name:
																								courtdate[0].party1name,
																							party2: courtdate[0].party2,
																							party2name:
																								courtdate[0].party2name,
																							casenumber1:
																								courtdate[0]
																									.casenumber1,
																							casenumber2:
																								courtdate[0]
																									.casenumber2,
																							jurisdiction:
																								courtdate[0]
																									.jurisdiction,
																							notes: courtdate[0].notes
																						},
																						shipping: shipping,
																						appearances: appearances,
																						citations: citations,
																						commHistory: commhistory,
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
																								jobentered:
																									courtdate[0]
																										.jobentered,
																								appsentered:
																									courtdate[0]
																										.appsentered,
																								coverpage:
																									courtdate[0]
																										.coverpage,
																								autocorrect:
																									courtdate[0]
																										.autocorrect,
																								schedule:
																									courtdate[0]
																										.schedule,
																								prepinvoice:
																									courtdate[0]
																										.prepinvoice,
																								agshortcuts:
																									courtdate[0]
																										.agshortcuts
																							},
																							stage2: {
																								transcribe:
																									courtdate[0]
																										.transcribe
																							},
																							stage3: {
																								addrdtocover:
																									courtdate[0]
																										.addrdtocover,
																								findreplacerd:
																									courtdate[0]
																										.findreplacerd,
																								hyperlink:
																									courtdate[0]
																										.hyperlink,
																								spellingsemail:
																									courtdate[0]
																										.spellingsemail,
																								audioproof:
																									courtdate[0]
																										.audioproof
																							},
																							stage4: {
																								invoicecompleted:
																									courtdate[0]
																										.invoicecompleted,
																								noticeofservice:
																									courtdate[0]
																										.noticeofservice,
																								peletter:
																									courtdate[0]
																										.peletter,
																								cdlabel:
																									courtdate[0]
																										.cdlabel,
																								generatezips:
																									courtdate[0]
																										.generatezips,
																								transcriptsready:
																									courtdate[0]
																										.transcriptsready,
																								invoicetofactoremail:
																									courtdate[0]
																										.invoicetofactoremail,
																								filetranscript:
																									courtdate[0]
																										.filetranscript,
																								burncd:
																									courtdate[0].burncd,
																								shippingxmls:
																									courtdate[0]
																										.shippingxmls,
																								shippingemail:
																									courtdate[0]
																										.shippingemail,
																								addtrackingno:
																									courtdate[0]
																										.addtrackingno
																							}
																						},
																						tasks: tasks
																					});
																				}
																			});
																		}
																	}
																);
															}
														});
													}
												});
											}
										});
									}
								});
							}
						});
					}
				});
			})
			.catch(err => {
				res.status(500).json({
					message: `The courtdate information could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns basic info for one job/courtdate
router.get('/basic/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The courtdate information ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// DELETE:  delete a courtdates record
router.delete('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified ID ${courtdatesid} does not exist.`,
			error: err
		});
	}
	Courtdates.remove(courtdatesid)
		.then(courtdate => {
			res.json(courtdate);
		})
		.catch(err => {
			res.status(500).json({ message: `The courtdate ${courtdatesid} could not be removed.`, error: err });
		});
});

// POST:  create a courtdates record
router.post('/', restricted, (req, res) => {
	const newCourtdate = req.body;

	Courtdates.add(newCourtdate)
		.then(courtdate => {
			res.status(201).json(courtdate);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new courtdate.`, error: err });
		});
});

// PUT:  update a courtdates record
router.put('/:courtdatesid', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	const updatedCourtdates = req.body;

	Courtdates.update(courtdatesid, updatedCourtdates)
		.then(courtdate => {
			if (courtdate) {
				res.json(courtdate);
			} else {
				res.status(404).json({ message: `Could not find courtdate with given id ${courtdatesid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update courtdate.`, error: err });
		});
});

// GET:  returns apps for one job/courtdate
router.get('/:courtdatesid/apps', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The apps with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findAppsById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The apps information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns expenses for one job/courtdate
router.get('/:courtdatesid/expenses', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findExpensesById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The expenses information for this courtdate ${courtdatesid} could not be retrieved.`
				});
			});
	}
});

// GET:  returns payments for one job/courtdate
router.get('/:courtdatesid/payments', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findPaymentsById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The payments information for this courtdate ${courtdatesid} could not be retrieved.`
				});
			});
	}
});

// GET:  returns shipping for one job/courtdate
router.get('/:courtdatesid/shipping', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.getShippingById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The shipping information for this courtdate ${courtdatesid} could not be retrieved.`
				});
			});
	}
});

// GET:  returns citations for one job/courtdate
router.get('/:courtdatesid/citations', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findCitationsById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The citations information for this courtdate ${courtdatesid} could not be retrieved.`
				});
			});
	}
});

// GET:  returns tasks for one job/courtdate
router.get('/:courtdatesid/tasks', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({ message: `The courtdate with the specified courtdatesid does not exist.`, error: err });
	} else {
		Courtdates.findTasksById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The tasks information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns commhistory for one job/courtdate
router.get('/:courtdatesid/commhistory', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findCommHistoryById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The commhistory information for this courtdate ${courtdatesid} could not be retrieved.`
				});
			});
	}
});

// GET:  returns invoices for one job/courtdate
router.get('/:courtdatesid/invoices', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findInvoicesById(courtdatesid)
			.then(courtdate => {
				res.status(200).json(courtdate);
			})
			.catch(err => {
				res.status(500).json({
					message: `The invoice information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns statuses for one job/courtdate
router.get('/:courtdatesid/statuses', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findStatusesById(courtdatesid)
			.then(statuses => {
				res.status(200).json(statuses);
			})
			.catch(err => {
				res.status(500).json({
					message: `The statuses information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns brandingthemes for one job/courtdate
router.get('/:courtdatesid/brandingthemes', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findBTsById(courtdatesid)
			.then(brandingthemes => {
				res.status(200).json(brandingthemes);
			})
			.catch(err => {
				res.status(500).json({
					message: `The brandingthemes information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns rates for one job/courtdate
router.get('/:courtdatesid/rates', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findRatesById(courtdatesid)
			.then(rates => {
				res.status(200).json(rates);
			})
			.catch(err => {
				res.status(500).json({
					message: `The rates information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns agshortcuts for one job/courtdate
router.get('/:courtdatesid/agshortcuts', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findAGSById(courtdatesid)
			.then(agshortcuts => {
				res.status(200).json(agshortcuts);
			})
			.catch(err => {
				res.status(500).json({
					message: `The agshortcuts list information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns citationhyperlinks for one job/courtdate
router.get('/:courtdatesid/citationhyperlinks', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findCHsById(courtdatesid)
			.then(citationhyperlinks => {
				res.status(200).json(citationhyperlinks);
			})
			.catch(err => {
				res.status(500).json({
					message: `The citationhyperlinks information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns mailclasses for one job/courtdate
router.get('/:courtdatesid/mailclasses', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findMCsById(courtdatesid)
			.then(mailclasses => {
				res.status(200).json(mailclasses);
			})
			.catch(err => {
				res.status(500).json({
					message: `The mailclasses information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns packagetypes for one job/courtdate
router.get('/:courtdatesid/packagetypes', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findPTsById(courtdatesid)
			.then(packagetypes => {
				res.status(200).json(packagetypes);
			})
			.catch(err => {
				res.status(500).json({
					message: `The packagetypes information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns ccc for one job/courtdate
router.get('/:courtdatesid/ccc', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findCCCsById(courtdatesid)
			.then(ccc => {
				res.status(200).json(ccc);
			})
			.catch(err => {
				res.status(500).json({
					message: `The ccc information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns usc items for one job/courtdate
router.get('/:courtdatesid/usc', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The courtdate with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findUSCsById(courtdatesid)
			.then(usc => {
				res.status(200).json(usc);
			})
			.catch(err => {
				res.status(500).json({
					message: `The usc information for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// GET:  returns contractors for one job/courtdate
router.get('/:courtdatesid/contractors', restricted, (req, res) => {
	const courtdatesid = req.params.courtdatesid;
	if (!courtdatesid) {
		res.status(404).json({
			message: `The job with the specified courtdatesid ${courtdatesid} does not exist.`,
			error: err
		});
	} else {
		Courtdates.findContractorsById(courtdatesid)
			.then(contractors => {
				res.status(200).json(contractors);
			})
			.catch(err => {
				res.status(500).json({
					message: `The contractors for this courtdate ${courtdatesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

module.exports = router;
