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
	return db('examtypes').select('*');
}

function findBy(filter) {
	return db('examtypes').where(filter);
}

async function add(singleexamtype) {
	const [eid] = await db('examtypes').insert(singleexamtype, 'eid');
	return findById(eid);
}

function findById(eid) {
	return db('examtypes').select('eid', '*').where({ eid }).first();
}

function update(eid, singleexamtype) {
	return db('examtypes').where('eid', Number(eid)).update(singleexamtype);
}

function remove(eid) {
	return db('examtypes').where('eid', Number(eid)).del();
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
