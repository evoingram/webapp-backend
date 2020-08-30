/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	return knex("courtdatesinvoices")
		.del()
		.then(() => {
			return knex("courtdatesinvoices").insert([
				{ cdinid: 1, courtdatesid: 1, iid: 1 },
				{ cdinid: 2, courtdatesid: 2, iid: 2 },
				{ cdinid: 3, courtdatesid: 3, iid: 3 },
				{ cdinid: 4, courtdatesid: 4, iid: 4 },
				{ cdinid: 5, courtdatesid: 5, iid: 5 }
			]);
		});
};
