/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("courtdatesinvoices", (courtdatesinvoices) => {
		courtdatesinvoices.increments("cdinid");

		courtdatesinvoices
			.integer("courtdatesid")
			.unsigned()
			.notNullable()
			.references("courtdatesid")
			.inTable("courtdates")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");

		courtdatesinvoices
			.integer("iid")
			.unsigned()
			.notNullable()
			.references("iid")
			.inTable("invoices")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("courtdatesinvoices");
};
