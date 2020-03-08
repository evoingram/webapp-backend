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
					date: Date.UTC('07-29-2019'),
					amount: 0.75,
					description: 'binding'
				},
				{
					eid: 2,
					courtdatesid: 2,
					vendor: 'USPS',
					date: Date.UTC('06-29-2019'),
					amount: 4.95,
					description: 'postage'
				},
				{
					eid: 3,
					courtdatesid: 3,
					vendor: 'OfficeSupplies.com',
					date: Date.UTC('08-29-2019'),
					amount: 0.5,
					description: 'paper'
				},
				{
					eid: 4,
					courtdatesid: 4,
					vendor: 'Amazon',
					date: Date.UTC('09-29-2019'),
					amount: 1.0,
					description: 'pen'
				},
				{
					eid: 5,
					courtdatesid: 5,
					vendor: 'GotPrint',
					date: Date.UTC('10-29-2019'),
					amount: 0.25,
					description: 'covers'
				}
			]);
		});
};
