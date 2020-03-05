exports.up = function(knex) {
	return knex.schema.createTable('courtdates', courtdates => {
		courtdates.increments('courtdatesid');

		tbl.integer('ratesid')
			.unsigned()
			.notNullable()
			.references('ratesid')
			.inTable('rates')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('ttid')
			.unsigned()
			.notNullable()
			.references('ttid')
			.inTable('turnaroundtimes')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('btid')
			.unsigned()
			.notNullable()
			.references('btid')
			.inTable('brandingthemes')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('invoiceno')
			.unsigned()
			.notNullable()
			.references('invoiceno')
			.inTable('invoices')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		courtdates.date('hearingdate').notNullable();
		courtdates.time('hearingstarttime');
		courtdates.time('hearingendtime');
		courtdates.integer('audiolength').notNullable();
		courtdates.string('location');
		courtdates.date('shipdate');
		courtdates.date('duedate').notNullable();
		courtdates.string('trackingno');
		courtdates.string('paymenttype').notNullable();
		courtdates.boolean('filed').notNullable();
		courtdates.decimal('factoringcost');
		courtdates.integer('estimatedquantity').notNullable();
		courtdates.integer('actualquantity');
		courtdates.decimal('subtotal');
		courtdates.date('estimatedrebatedate').notNullable();
		courtdates.date('estimatedadvancedate').notNullable();
		courtdates.decimal('finalprice');
		courtdates.string('ppid');
		courtdates.string('ppstatus');
		courtdates.string('hearingtitle');
		courtdates.string('judgename');
		courtdates.string('judgetitle');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('courtdates');
};
