const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db('cases').select('*');
}

function findBy(filter) {
	return db('cases').where(filter);
}

async function add(onecase) {
	const [casesid] = await db('cases').insert(onecase, 'casesid');
	return findById(casesid);
}

function findById(casesid) {
	return db('cases')
		.select('*')
		.where({ casesid })
		.first();
}

function update(casesid, onecase) {
	return db('cases')
		.where('casesid', Number(casesid))
		.update(onecase);
}

function remove(casesid) {
	return db('cases')
		.where('casesid', Number(casesid))
		.del();
}
