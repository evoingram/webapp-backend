/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("turnaroundtimes", (turnaroundtimes) => {
		turnaroundtimes.increments("ttid");

		turnaroundtimes
			.integer("turnaroundtime")
			.notNullable()
			.unique();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("turnaroundtimes");
};
