exports.up = function(knex) {
	return knex.schema.createTable('brandingthemes', brandingthemes => {
		brandingthemes.increments('btid');

		brandingthemes.string('brandingtheme', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('brandingthemes');
};
