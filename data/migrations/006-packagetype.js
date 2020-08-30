/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("packagetype", (packagetype) => {
		packagetype.increments("ptid");

		packagetype.string("packagetype", 128).notNullable();
		packagetype.string("description", 128).notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("packagetype");
};
