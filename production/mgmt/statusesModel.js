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
	return db('statuses').select('*');
}

function findBy(filter) {
	return db('statuses').where(filter);
}

async function add(status) {
	const [sid] = await db('statuses').insert(status, 'sid');
	return findById(sid);
}

function findById(sid) {
	return db('statuses').select('sid', '*').where({ sid }).first();
}

function update(sid, status) {
	return db('statuses').where({ sid }).update(status);
}

function remove(sid) {
	return db('statuses').where('sid', Number(sid)).del();
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
