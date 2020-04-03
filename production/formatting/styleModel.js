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
	return db('stylenames').select('*');
}

function findBy(filter) {
	return db('stylenames').where(filter);
}

async function add(style) {
	const [sid] = await db('stylenames').insert(style, 'sid');
	return findById(sid);
}

function findById(sid) {
	return db('stylenames').select('sid', '*').where({ sid }).first();
}

function update(sid, style) {
	return db('stylenames').where('sid', Number(sid)).update(style);
}

function remove(sid) {
	return db('stylenames').where('sid', Number(sid)).del();
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
