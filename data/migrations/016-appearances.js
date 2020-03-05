exports.up = function(knex) {
	return knex.schema.createTable('appearances', appearances => {
		appearances.increments('appid');

		tbl.integer('customersid')
			.unsigned()
			.notNullable()
			.references('invoiceno')
			.inTable('invoices')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('courtdatesid')
			.unsigned()
			.notNullable()
			.references('invoiceno')
			.inTable('invoices')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		appearances.integer('cdappid').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('appearances');
};
