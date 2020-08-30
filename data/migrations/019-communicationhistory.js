/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("communicationhistory", (communicationhistory) => {
		communicationhistory.increments("chid");

		communicationhistory
			.integer("courtdatesid")
			.unsigned()
			.notNullable()
			.references("courtdatesid")
			.inTable("courtdates")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");

		communicationhistory
			.integer("customersid")
			.unsigned()
			.notNullable()
			.references("customersid")
			.inTable("customers")
			.onUpdate("CASCADE")
			.onDelete("RESTRICT");

		communicationhistory.string("filepath");
		communicationhistory.date("datecreated").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("communicationhistory");
};
