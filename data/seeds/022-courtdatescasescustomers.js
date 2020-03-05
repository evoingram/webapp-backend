exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('courtdatescasescustomers')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('courtdatescasescustomers').insert([
				{ id: 1, casesid: 1, courtdatesid: 1, orderingid: 1 },
				{ id: 2, casesid: 2, courtdatesid: 2, orderingid: 2 },
				{ id: 3, casesid: 3, courtdatesid: 3, orderingid: 3 }
			]);
		});
};
