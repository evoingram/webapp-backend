exports.seed = function(knex) {
	// Deletes ALL existing entries
	// knex migrate:latest
	// knex seed:run
	// knex seed:up 01.js
	// dates at 009, 012, 013, 017, 018, 019
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
					invoicedate: Date({ year: 2020, month: 03, date: 05 }),
					duedate: Date({ year: 2020, month: 03, date: 06 }),
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
					invoicedate: Date({ year: 2020, month: 03, date: 05 }),
					duedate: Date({ year: 2020, month: 03, date: 06 }),
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
					invoicedate: Date({ year: 2020, month: 03, date: 05 }),
					duedate: Date({ year: 2020, month: 03, date: 06 }),
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
					invoicedate: Date({ year: 2020, month: 03, date: 05 }),
					duedate: Date({ year: 2020, month: 03, date: 06 }),
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
					invoicedate: Date({ year: 2020, month: 03, date: 05 }),
					duedate: Date({ year: 2020, month: 03, date: 06 }),
					itemcode: 'CNB03',
					description: '3 calendar-day turnaround',
					accountcode: 400,
					taxtype: 'none'
				}
			]);
		});
};
