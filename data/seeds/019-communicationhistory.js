exports.seed = function(knex) {
	return knex('communicationhistory')
		.del()
		.then(function() {
			return knex('communicationhistory').insert([
				{ chid: 1, courtdatesid: 1, customersid: 1, filepath: '/sample/path/1', datecreated: '2019-05-15' },
				{ chid: 2, courtdatesid: 2, customersid: 2, filepath: '/sample/path/2', datecreated: '2019-06-15' },
				{ chid: 3, courtdatesid: 3, customersid: 3, filepath: '/sample/path/3', datecreated: '2019-07-15' },
				{ chid: 3, courtdatesid: 4, customersid: 4, filepath: '/sample/path/4', datecreated: '2019-08-15' },
				{ chid: 3, courtdatesid: 5, customersid: 5, filepath: '/sample/path/5', datecreated: '2019-09-15' }
			]);
		});
};
