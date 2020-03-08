exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('expenses')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('expenses').insert([
				{
					eid: 1,
					courtdatesid: 1,
					vendor: 'Office Depot',
					date: Date.UTC({ year: 2020, month: 07, date: 29 }),
					amount: 0.75,
					description: 'binding'
				},
				{
					eid: 2,
					courtdatesid: 2,
					vendor: 'USPS',
					date: Date.UTC({ year: 2020, month: 06, date: 29 }),
					amount: 4.95,
					description: 'postage'
				},
				{
					eid: 3,
					courtdatesid: 3,
					vendor: 'OfficeSupplies.com',
					date: Date.UTC({ year: 2020, month: 08, date: 29 }),
					amount: 0.5,
					description: 'paper'
				},
				{
					eid: 4,
					courtdatesid: 4,
					vendor: 'Amazon',
					date: Date.UTC({ year: 2020, month: 09, date: 29 }),
					amount: 1.0,
					description: 'pen'
				},
				{
					eid: 5,
					courtdatesid: 5,
					vendor: 'GotPrint',
					date: Date.UTC({ year: 2020, month: 10, date: 29 }),
					amount: 0.25,
					description: 'covers'
				}
			]);
		});
};
