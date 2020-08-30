/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("citations", (citations) => {
		citations.increments("citationsid");

		citations.integer("uscid");
		citations.integer("citlinksid");
		citations.integer("courtdatesid").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("citations");
};
