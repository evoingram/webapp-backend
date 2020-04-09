exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('usertypes')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('usertypes').insert([
				{
					utid: 1,
					customersid: 1,
					usertype: 'admin'
				},
				{
					utid: 1,
					customersid: 2,
					usertype: 'admin'
				},
				{
					utid: 1,
					customersid: 3,
					username: 'customer'
				},
				{
					utid: 1,
					customersid: 4,
					usertype: 'contractor'
				},
				{
					utid: 1,
					customersid: 5,
					usertype: 'customer'
				}
			]);
		});
};
