exports.up = function(knex) {
	return knex.schema.createTable('communicationhistory', communicationhistory => {
		communicationhistory.increments('chid');

		tbl.integer('courtdatesid')
			.unsigned()
			.notNullable()
			.references('invoiceno')
			.inTable('invoices')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('customersid')
			.unsigned()
			.notNullable()
			.references('customersid')
			.inTable('customers')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		communicationhistory.string('filepath');
		communicationhistory.date('datecreated').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('communicationhistory');
};
