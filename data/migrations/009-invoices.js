exports.up = function(knex) {
	return knex.schema.createTable('invoices', invoices => {
		invoices.increments('iid');
		tbl.integer('customersid')
			.unsigned()
			.notNullable()
			.references('customersid')
			.inTable('customers')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('btid')
			.unsigned()
			.notNullable()
			.references('btid')
			.inTable('brandingthemes')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('ratesid')
			.unsigned()
			.notNullable()
			.references('ratesid')
			.inTable('rates')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		invoices
			.integer('invoiceno')
			.unsigned()
			.notNullable();

		invoices.decimal('discount');

		invoices.string('reference').notNullable();
		invoices.date('invoicedate');
		invoices.date('duedate');
		invoices.string('itemcode').notNullable();
		invoices.string('description').notNullable();

		invoices
			.integer('accountcode')
			.unsigned()
			.notNullable();

		invoices.string('taxtype').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('invoices');
};
