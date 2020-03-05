exports.up = function(knex) {
	return knex.schema.createTable('customers', customers => {
		customers.increments();

		customers
			.string('username', 128)
			.notNullable()
			.unique();

		customers
			.string('email', 128)
			.notNullable()
			.unique();

		customers.string('password', 128).notNullable();
		customers.string('company', 128).notNullable();
		customers.string('mrms', 128).notNullable();
		customers.string('lastname', 128).notNullable();
		customers.string('firstname', 128).notNullable();
		customers.string('jobtitle', 128);
		customers.string('businessphone', 128);
		customers.string('address1', 128);
		customers.string('address2', 128);
		customers.string('city', 128);
		customers.string('state', 128);
		customers.string('zip', 128);
		customers.string('notes', 128);
		customers
			.boolean('factoring')
			.notNullable()
			.defaultTo(false);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('customers');
};
