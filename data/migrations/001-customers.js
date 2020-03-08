exports.up = function(knex) {
	return knex.schema.createTable('customers', customers => {
		customers.increments('customersid');

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

postgres://ktiszgxbfnxagz:c59295f2e001bdc3e63cf83c72ac08f8bdff7086d1be32965f87730e20f1067e@ec2-184-72-235-159.compute-1.amazonaws.com:5432/d6gqnc1s8u40m9