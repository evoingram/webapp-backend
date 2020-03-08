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
					datecreated: Date({ year: 2020, month: 05, date: 15 })
				},
				{
					chid: 2,
					courtdatesid: 2,
					customersid: 2,
					filepath: '/sample/path/2',
					datecreated: Date({ year: 2020, month: 06, date: 15 })
				},
				{
					chid: 3,
					courtdatesid: 3,
					customersid: 3,
					filepath: '/sample/path/3',
					datecreated: Date({ year: 2020, month: 07, date: 15 })
				},
				{
					chid: 3,
					courtdatesid: 4,
					customersid: 4,
					filepath: '/sample/path/4',
					datecreated: Date({ year: 2020, month: 08, date: 15 })
				},
				{
					chid: 3,
					courtdatesid: 5,
					customersid: 5,
					filepath: '/sample/path/5',
					datecreated: Date({ year: 2020, month: 09, date: 15 })
				}
			]);
		});
};
