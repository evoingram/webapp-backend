exports.up = function(knex) {
	return knex.schema.createTable('citationhyperlinks', citationhyperlinks => {
		citationhyperlinks.increments('chid');

		citationhyperlinks.string('findcitation', 256).notNullable();
		citationhyperlinks.string('replacehyperlink', 256).notNullable();
		citationhyperlinks.string('longcitation', 256).notNullable();
		citationhyperlinks.string('chcategory', 256).notNullable();
		citationhyperlinks.string('webaddress', 256).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('citationhyperlinks');
};
