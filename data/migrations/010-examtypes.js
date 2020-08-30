/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("examtypes", (examtypes) => {
		examtypes.increments("eid");

		examtypes.string("examination").notNullable();
		examtypes.string("ecode").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("examtypes");
};
