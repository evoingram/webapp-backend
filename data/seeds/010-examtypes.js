exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('examtypes')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('examtypes').insert([
				{
					eid: 1,
					examination: 'direct examination',
					ecode: 'ee1'
				},
				{
					eid: 2,
					examination: 'cross-examination',
					ecode: 'ee2'
				},
				{
					eid: 3,
					examination: 'redirect examination',
					ecode: 'ee3'
				},
				{
					eid: 4,
					examination: 'recross-examination',
					ecode: 'ee4'
				},
				{
					eid: 5,
					examination: 'further redirect examination',
					ecode: 'ee5'
				},
				{
					eid: 5,
					examination: 'further recross-examination',
					ecode: 'ee6'
				},
				{
					eid: 1,
					examination: 'direct examination continued',
					ecode: 'e1c'
				},
				{
					eid: 2,
					examination: 'cross-examination continued',
					ecode: 'e2c'
				},
				{
					eid: 3,
					examination: 'redirect examination continued',
					ecode: 'e3c'
				},
				{
					eid: 4,
					examination: 'recross-examination continued',
					ecode: 'e4c'
				},
				{
					eid: 5,
					examination: 'further redirect examination continued',
					ecode: 'e5c'
				},
				{
					eid: 5,
					examination: 'further recross-examination continued',
					ecode: 'e6c'
				},
				{
					eid: 5,
					examination: 'voir dire examination',
					ecode: 'vdex'
				}
			]);
		});
};
