/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	return knex("usertypes")
		.del()
		.then(() => {
			return knex("usertypes").insert([
				{
					utid: 1,
					customersid: 1,
					usertype: "admin"
				},
				{
					utid: 2,
					customersid: 2,
					usertype: "admin"
				},
				{
					utid: 3,
					customersid: 3,
					usertype: "customer"
				},
				{
					utid: 4,
					customersid: 4,
					usertype: "contractor"
				},
				{
					utid: 5,
					customersid: 5,
					usertype: "customer"
				},
				{
					utid: 6,
					customersid: 6,
					usertype: "admin"
				}
			]);
		});
};
