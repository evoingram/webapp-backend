/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("stylenames", (stylenames) => {
		stylenames.increments("sid");

		stylenames.string("stylename").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("stylenames");
};
