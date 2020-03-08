exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('payments')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('payments').insert([
				{
					pid: 1,
					iid: 1,
					remitdate: Date.UTC({ year: 2020, month: 07, date: 01 }),
					amount: 50.0
				},
				{
					pid: 2,
					iid: 2,
					remitdate: Date.UTC({ year: 2020, month: 08, date: 01 }),
					amount: 75.6
				},
				{
					pid: 3,
					iid: 3,
					remitdate: Date.UTC({ year: 2020, month: 09, date: 01 }),
					amount: 125.35
				},
				{
					pid: 4,
					iid: 4,
					remitdate: Date.UTC({ year: 2020, month: 10, date: 01 }),
					amount: 545.9
				},
				{
					pid: 5,
					iid: 5,
					remitdate: Date.UTC({ year: 2020, month: 11, date: 01 }),
					amount: 2498.6
				}
			]);
		});
};
