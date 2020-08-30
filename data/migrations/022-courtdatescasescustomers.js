/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("courtdatescasescustomers", (courtdatescasescustomers) => {
		courtdatescasescustomers.increments("cdccid");

		courtdatescasescustomers
			.integer("courtdatesid")
			.unsigned()
			.notNullable()
			.references("courtdatesid")
			.inTable("courtdates")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");

		courtdatescasescustomers
			.integer("casesid")
			.unsigned()
			.notNullable()
			.references("casesid")
			.inTable("cases")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");

		courtdatescasescustomers
			.integer("orderingid")
			.unsigned()
			.notNullable()
			.references("customersid")
			.inTable("customers")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("courtdatescasescustomers");
};
