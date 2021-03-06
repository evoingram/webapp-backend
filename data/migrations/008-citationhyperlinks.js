/* eslint-disable linebreak-style */
exports.up = (knex) => {
	return knex.schema.createTable("citationhyperlinks", (citationhyperlinks) => {
		citationhyperlinks.increments("chid");

		citationhyperlinks.string("findcitation").notNullable();
		citationhyperlinks.string("longcitation").notNullable();
		citationhyperlinks.string("chcategory").notNullable();
		citationhyperlinks.string("webaddress").notNullable();
	});
};

exports.down = (knex) => {
	return knex.schema.dropTableIfExists("citationhyperlinks");
};
