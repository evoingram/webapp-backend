/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("usc", (usc) => {
		usc.increments("uscid");

		usc.string("findcitation").notNullable();
		usc.string("replacehyperlink").notNullable();
		usc.string("longcitation").notNullable();
		usc.string("chcategory").notNullable();
		usc.string("webaddress").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("usc");
};
