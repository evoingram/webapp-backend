exports.up = function(knex) {
	return knex.schema.createTable('payments', payments => {
		payments.increments('pid');

		tbl.integer('invoiceno')
			.unsigned()
			.notNullable()
			.references('invoiceno')
			.inTable('invoices')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');
		payments.date('remitdate').notNullable();
		payments.decimal('amount').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('payments');
};
