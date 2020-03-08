exports.seed = function(knex) {
	// Deletes ALL existing entries
	// knex migrate:latest
	// knex seed:run
	// knex seed:run --specific=00.js
	// knex seed:run --specific=01.js
	// knex seed:run --specific=02.js
	// dates at 009, 012, 013, 017, 018, 019
	/*
		knex seed:run --specific=001-customers.js;
		knex seed:run --specific=002-rates.js;knex seed:run --specific=003-brandingthemes.js;knex seed:run --specific=004-turnaroundtimes.js;knex seed:run --specific=005-mailclass.js;knex seed:run --specific=006-packagetype.js;knex seed:run --specific=007-cases.js;knex seed:run --specific=008-citationhyperlinks.js;knex seed:run --specific=009-invoices.js;knex seed:run --specific=010-examtypes.js;knex seed:run --specific=012-payments.js;knex seed:run --specific=013-courtdates.js;knex seed:run --specific=014-statuses.js;knex seed:run --specific=014a-agshortcuts.js;knex seed:run --specific=015-stylenames.js;knex seed:run --specific=016-appearances.js;knex seed:run --specific=017-tasks.js;knex seed:run --specific=018-expenses.js;knex seed:run --specific=019-communicationhistory.js;knex seed:run --specific=020-shippingoptions.js;knex seed:run --specific=021-courtdatesinvoices.js;knex seed:run --specific=022-courtdatescasescustomers.js;knex seed:run --specific=024-usc.js;


		knex seed:run --specific=014a-agshortcuts.js;knex seed:run --specific=016-appearances.js;knex seed:run --specific=019-communicationhistory.js;knex seed:run --specific=020-shippingoptions.js;
	*/
	/*
		knex seed:run --specific=001-customers.js;
		knex seed:run --specific=002-rates.js
		knex seed:run --specific=003-brandingthemes.js
		knex seed:run --specific=004-turnaroundtimes.js
		knex seed:run --specific=005-mailclass.js
		knex seed:run --specific=006-packagetype.js
		knex seed:run --specific=007-cases.js
		knex seed:run --specific=008-citationhyperlinks.js
		knex seed:run --specific=009-invoices.js
		knex seed:run --specific=010-examtypes.js
		knex seed:run --specific=012-payments.js
		knex seed:run --specific=013-courtdates.js
		knex seed:run --specific=014-statuses.js
		knex seed:run --specific=014a-agshortcuts.js
		knex seed:run --specific=015-stylenames.js
		knex seed:run --specific=016-appearances.js
		knex seed:run --specific=017-tasks.js
		knex seed:run --specific=018-expenses.js
		knex seed:run --specific=019-communicationhistory.js
		knex seed:run --specific=020-shippingoptions.js
		knex seed:run --specific=021-courtdatesinvoices.js
		knex seed:run --specific=022-courtdatescasescustomers.js
		knex seed:run --specific=024-usc.js

	*/
	return knex('invoices')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('invoices').insert([
				{
					iid: 1,
					customersid: 2,
					btid: 1,
					ratesid: 1,
					invoiceno: 594000,
					discount: 0.1,
					reference: 1,
					invoicedate: '2020-03-05 00:00:00',
					duedate: '2020-03-06 00:00:00',
					itemcode: 'CNB45',
					description: '45 calendar-day turnaround',
					accountcode: 400,
					taxtype: 'none'
				},
				{
					iid: 2,
					customersid: 3,
					btid: 2,
					ratesid: 2,
					invoiceno: 594001,
					discount: 0.1,
					reference: 2,
					invoicedate: '2020-03-05 00:00:00',
					duedate: '2020-03-06 00:00:00',
					itemcode: 'CNB30',
					description: '30 calendar-day turnaround',
					accountcode: 400,
					taxtype: 'none'
				},
				{
					iid: 3,
					customersid: 1,
					btid: 3,
					ratesid: 3,
					invoiceno: 594002,
					discount: 0.1,
					reference: 3,
					invoicedate: '2020-03-05 00:00:00',
					duedate: '2020-03-06 00:00:00',
					itemcode: 'CNB14',
					description: '14 calendar-day turnaround',
					accountcode: 400,
					taxtype: 'none'
				},
				{
					iid: 4,
					customersid: 1,
					btid: 4,
					ratesid: 4,
					invoiceno: 594003,
					discount: 0.1,
					reference: 4,
					invoicedate: '2020-03-05 00:00:00',
					duedate: '2020-03-06 00:00:00',
					itemcode: 'CNB7',
					description: '7 calendar-day turnaround',
					accountcode: 400,
					taxtype: 'none'
				},
				{
					iid: 5,
					customersid: 1,
					btid: 5,
					ratesid: 5,
					invoiceno: 594004,
					discount: 0.1,
					reference: 5,
					invoicedate: '2020-03-05 00:00:00',
					duedate: '2020-03-06 00:00:00',
					itemcode: 'CNB03',
					description: '3 calendar-day turnaround',
					accountcode: 400,
					taxtype: 'none'
				}
			]);
		});
};
