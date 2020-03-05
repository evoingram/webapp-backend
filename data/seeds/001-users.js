exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{ id: 1, username: 'admin', password: 'password', email: 'admin@aquoco.onmicrosoft.com' },
				{ id: 2, username: 'evoingram', password: 'password', email: 'evoingram@aquoco.onmicrosoft.com' },
				{ id: 3, username: 'customer', password: 'password', email: 'customer@aquoco.onmicrosoft.com' }
			]);
		});
};
