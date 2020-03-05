exports.up = function(knex) {
	return knex.schema.createTable('courtdatescasescustomers', courtdatescasescustomers => {
		courtdatescasescustomers.increments('cdccid');

		tbl.integer('courtdatesid')
			.unsigned()
			.notNullable()
			.references('courtdatesid')
			.inTable('courtdates')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('casesid')
			.unsigned()
			.notNullable()
			.references('casesid')
			.inTable('cases')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		tbl.integer('orderingid')
			.unsigned()
			.notNullable()
			.references('customersid')
			.inTable('customers')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('courtdatescasescustomers');
};
