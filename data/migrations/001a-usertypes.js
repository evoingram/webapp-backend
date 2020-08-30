/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("usertypes", (usertypes) => {
		usertypes.increments("utid");

		usertypes.string("usertype", 256).notNullable().defaultTo("customer");

		usertypes
			.integer("customersid")
			.unsigned()
			.notNullable()
			.unique()
			.references("customersid")
			.inTable("customers")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("usertypes");
};
