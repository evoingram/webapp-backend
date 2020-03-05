exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('courtdatesinvoices')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('courtdatesinvoices').insert([
				{ cdinid: 1, courtdatesid: 1, iid: 590000 },
				{ cdinid: 2, courtdatesid: 2, iid: 590001 },
				{ cdinid: 3, courtdatesid: 3, iid: 590002 }
			]);
		});
};
