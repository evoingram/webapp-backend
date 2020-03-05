exports.up = function(knex) {
	return knex.schema.createTable('mailclass', mailclass => {
		mailclass.increments('mcid');

		mailclass.string('mailclass', 128).notNullable();
		mailclass.string('description', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('mailclass');
};
