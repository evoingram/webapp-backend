/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("brandingthemes", (brandingthemes) => {
		brandingthemes.increments("btid");

		brandingthemes.string("brandingtheme").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("brandingthemes");
};
