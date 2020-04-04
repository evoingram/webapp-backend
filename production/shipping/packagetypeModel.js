const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db('packagetype').select('*');
}

function findBy(filter) {
	return db('packagetype').where(filter);
}

async function add(singlepackagetype) {
	const [ptid] = await db('packagetype').insert(singlepackagetype, 'ptid');
	return findById(ptid);
}

function findById(ptid) {
	return db('packagetype').select('ptid', '*').where({ ptid }).first();
}

function update(ptid, singlepackagetype) {
	return db('packagetype').where('ptid', Number(ptid)).update(singlepackagetype);
}

function remove(ptid) {
	return db('packagetype').where('ptid', Number(ptid)).del();
}
