exports.up = function(knex) {
	return knex.schema.createTable('courtdatesinvoices', courtdatesinvoices => {
		courtdatesinvoices.increments('cdinid');

		tbl.integer('courtdatesid')
			.unsigned()
			.notNullable()
			.references('courtdatesid')
			.inTable('courtdates')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('iid')
			.unsigned()
			.notNullable()
			.references('iid')
			.inTable('invoices')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('courtdatesinvoices');
};