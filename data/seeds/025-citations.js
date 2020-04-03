exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('citations')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('citations').insert([
				{
					citationsid: 1,
					uscid: 1,
					citlinksid: '',
					courtdatesid: 1
				},
				{
					citationsid: 2,
					uscid: '',
					citlinksid: 2,
					courtdatesid: 1
				},
				{
					citationsid: 3,
					uscid: 1,
					citlinksid: '',
					courtdatesid: 2
				},
				{
					citationsid: 4,
					uscid: '',
					citlinksid: 1,
					courtdatesid: 3
				},
				{
					citationsid: 5,
					uscid: 1,
					citlinksid: '',
					courtdatesid: 4
				}
			]);
		});
};
