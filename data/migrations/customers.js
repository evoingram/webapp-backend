exports.up = function(knex) {
	return knex.schema.createTable('customers', customers => {
		customers.increments();

		customers
			.string('username', 128)
			.notNullable()
			.unique();

		customers.string('password', 128).notNullable();

		customers
			.string('email', 128)
			.notNullable()
			.unique();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('customers');
};
