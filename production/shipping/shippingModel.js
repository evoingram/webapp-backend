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
	return db('courtdates').select('*');
}

function findBy(filter) {
	return db('courtdates').where(filter);
}

async function add(courtdate) {
	const [courtdatesid] = await db('courtdates').insert(courtdate, 'courtdatesid');
	return findById(courtdatesid);
}

function findById(courtdatesid) {
	return db('courtdates')
		.select('courtdatesid', '*')
		.where({ courtdatesid })
		.first();
}

function update(courtdatesid, courtdate) {
	return db('courtdates')
		.where('courtdatesid', Number(courtdatesid))
		.update(courtdate);
}

function remove(courtdatesid) {
	return db('courtdates')
		.where('courtdatesid', Number(courtdatesid))
		.del();
}

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/
