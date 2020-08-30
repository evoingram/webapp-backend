/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	return knex("citations")
		.del()
		.then(() => {
			return knex("citations").insert([
				{
					citationsid: 1,
					uscid: 1,
					citlinksid: null,
					courtdatesid: 1
				},
				{
					citationsid: 2,
					uscid: null,
					citlinksid: 2,
					courtdatesid: 1
				},
				{
					citationsid: 3,
					uscid: 1,
					citlinksid: null,
					courtdatesid: 2
				},
				{
					citationsid: 4,
					uscid: null,
					citlinksid: 1,
					courtdatesid: 3
				},
				{
					citationsid: 5,
					uscid: 1,
					citlinksid: null,
					courtdatesid: 4
				}
			]);
		});
};
