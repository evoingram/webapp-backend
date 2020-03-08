exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('courtdates')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('courtdates').insert([
				{
					courtdatesid: 1,
					casesid: 1,
					ratesid: 1,
					ttid: 1,
					btid: 1,
					iid: 1,
					hearingdate: Date({ year: 2020, month: 05, date: 01 }),
					hearingstarttime: Date({ year: 2020, month: 05, date: 05, hours: 10, minutes: 00 }),
					hearingendtime: Date({ year: 2020, month: 05, date: 05, hours: 11, minutes: 00 }),
					audiolength: 60,
					location: 'Seattle, Washington',
					shipdate: null,
					duedate: Date({ year: 2020, month: 06, date: 01 }),
					trackingno: '',
					paymenttype: 'PayPal',
					filed: false,
					factoringcost: 0,
					estimatedquantity: 45,
					actualquantity: null,
					subtotal: 164.25,
					estimatedrebatedate: Date({ year: 2020, month: 07, date: 01 }),
					estimatedadvancedate: Date({ year: 2020, month: 06, date: 01 }),
					finalprice: null,
					ppid: '',
					ppstatus: '',
					hearingtitle: 'Hearing',
					judgename: 'Judge John Doe',
					judgetitle: 'King County Superior Court Judge'
				},
				{
					courtdatesid: 2,
					casesid: 2,
					ratesid: 2,
					ttid: 2,
					btid: 2,
					iid: 2,
					hearingdate: Date({ year: 2020, month: 05, date: 04 }),
					hearingstarttime: Date({ year: 2020, month: 05, date: 04, hours: 10, minutes: 00 }),
					hearingendtime: Date({ year: 2020, month: 05, date: 04, hours: 11, minutes: 00 }),
					audiolength: 60,
					location: 'Seattle, Washington',
					shipdate: null,
					duedate: Date({ year: 2020, month: 08, date: 01 }),
					trackingno: '',
					paymenttype: 'PayPal',
					filed: false,
					factoringcost: 0,
					estimatedquantity: 45,
					actualquantity: null,
					subtotal: 164.25,
					estimatedrebatedate: Date({ year: 2020, month: 09, date: 01 }),
					estimatedadvancedate: Date({ year: 2020, month: 08, date: 01 }),
					finalprice: null,
					ppid: '',
					ppstatus: '',
					hearingtitle: 'Hearing',
					judgename: 'Judge John Doe',
					judgetitle: 'King County Superior Court Judge'
				},
				{
					courtdatesid: 3,
					casesid: 3,
					ratesid: 3,
					ttid: 3,
					btid: 3,
					iid: 3,
					hearingdate: Date({ year: 2020, month: 05, date: 03 }),
					hearingstarttime: Date({ year: 2020, month: 05, date: 03, hours: 10, minutes: 00 }),
					hearingendtime: Date({ year: 2020, month: 05, date: 03, hours: 11, minutes: 00 }),
					audiolength: 60,
					location: 'Seattle, Washington',
					shipdate: null,
					duedate: Date({ year: 2020, month: 09, date: 01 }),
					trackingno: '',
					paymenttype: 'PayPal',
					filed: false,
					factoringcost: 0,
					estimatedquantity: 45,
					actualquantity: null,
					subtotal: 164.25,
					estimatedrebatedate: Date({ year: 2020, month: 10, date: 01 }),
					estimatedadvancedate: Date({ year: 2020, month: 09, date: 01 }),
					finalprice: null,
					ppid: '',
					ppstatus: '',
					hearingtitle: 'Hearing',
					judgename: 'Judge John Doe',
					judgetitle: 'King County Superior Court Judge'
				},
				{
					courtdatesid: 4,
					casesid: 4,
					ratesid: 4,
					ttid: 4,
					btid: 4,
					iid: 4,
					hearingdate: Date({ year: 2020, month: 05, date: 02 }),
					hearingstarttime: Date({ year: 2020, month: 05, date: 02, hours: 10, minutes: 00 }),
					hearingendtime: Date({ year: 2020, month: 05, date: 02, hours: 11, minutes: 00 }),
					audiolength: 60,
					location: 'Seattle, Washington',
					shipdate: null,
					duedate: Date({ year: 2020, month: 10, date: 01 }),
					trackingno: '',
					paymenttype: 'PayPal',
					filed: false,
					factoringcost: 0,
					estimatedquantity: 45,
					actualquantity: null,
					subtotal: 164.25,
					estimatedrebatedate: Date({ year: 2020, month: 11, date: 01 }),
					estimatedadvancedate: Date({ year: 2020, month: 10, date: 01 }),
					finalprice: 0.0,
					ppid: '',
					ppstatus: '',
					hearingtitle: 'Hearing',
					judgename: 'Judge John Doe',
					judgetitle: 'King County Superior Court Judge'
				},
				{
					courtdatesid: 5,
					casesid: 5,
					ratesid: 5,
					ttid: 5,
					btid: 5,
					iid: 5,
					hearingdate: Date({ year: 2020, month: 05, date: 01 }),
					hearingstarttime: Date({ year: 2020, month: 05, date: 01, hours: 10, minutes: 00 }),
					hearingendtime: Date({ year: 2020, month: 05, date: 01, hours: 11, minutes: 00 }),
					audiolength: 60,
					location: 'Seattle, Washington',
					shipdate: null,
					duedate: Date({ year: 2020, month: 06, date: 01 }),
					trackingno: '',
					paymenttype: 'PayPal',
					filed: false,
					factoringcost: 0,
					estimatedquantity: 45,
					actualquantity: null,
					subtotal: 164.25,
					estimatedrebatedate: Date({ year: 2020, month: 12, date: 01 }),
					estimatedadvancedate: Date({ year: 2020, month: 11, date: 01 }),
					finalprice: null,
					ppid: '',
					ppstatus: '',
					hearingtitle: 'Hearing',
					judgename: 'Judge John Doe',
					judgetitle: 'King County Superior Court Judge'
				}
			]);
		});
};
