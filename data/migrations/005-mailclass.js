/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("mailclass", (mailclass) => {
		mailclass.increments("mcid");

		mailclass.string("mailclass").notNullable();
		mailclass.string("description").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("mailclass");
};
