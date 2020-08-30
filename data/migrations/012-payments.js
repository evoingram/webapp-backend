/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("payments", (payments) => {
		payments.increments("pid");

		payments
			.integer("iid")
			.unsigned()
			.notNullable()
			.references("iid")
			.inTable("invoices")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");
		payments.date("remitdate").notNullable();
		payments.decimal("amount").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("payments");
};
