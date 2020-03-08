exports.seed = function(knex) {
	return knex('communicationhistory')
		.del()
		.then(function() {
			return knex('communicationhistory').insert([
				{
					chid: 1,
					courtdatesid: 1,
					customersid: 1,
					filepath: '/sample/path/1',
					datecreated: Date.UTC('05-15-2019')
				},
				{
					chid: 2,
					courtdatesid: 2,
					customersid: 2,
					filepath: '/sample/path/2',
					datecreated: Date.UTC('06-15-2019')
				},
				{
					chid: 3,
					courtdatesid: 3,
					customersid: 3,
					filepath: '/sample/path/3',
					datecreated: Date.UTC('07-15-2019')
				},
				{
					chid: 3,
					courtdatesid: 4,
					customersid: 4,
					filepath: '/sample/path/4',
					datecreated: Date.UTC('08-15-2019')
				},
				{
					chid: 3,
					courtdatesid: 5,
					customersid: 5,
					filepath: '/sample/path/5',
					datecreated: Date.UTC('09-15-2019')
				}
			]);
		});
};
