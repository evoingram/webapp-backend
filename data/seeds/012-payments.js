exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('payments')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('payments').insert([
				{
					pid: 1,
					invoiceno: '594000',
					remitdate: '07/01/2019',
					amount: 50.0
				},
				{
					pid: 2,
					invoiceno: '594001',
					remitdate: '08/01/2019',
					amount: 75.6
				},
				{
					pid: 3,
					invoiceno: '594002',
					remitdate: '09/01/2019',
					amount: 125.35
				},
				{
					pid: 4,
					invoiceno: '594003',
					remitdate: '10/01/2019',
					amount: 545.9
				},
				{
					pid: 5,
					invoiceno: '594004',
					remitdate: '11/01/2019',
					amount: 2498.6
				}
			]);
		});
};
