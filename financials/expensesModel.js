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
	return db('expenses').select('*');
}

function findBy(filter) {
	return db('expenses').where(filter);
}

async function add(expense) {
	const [eid] = await db('expenses').insert(expense, 'eid');
	return findById(eid);
}

function findById(eid) {
	return db('expenses').select('eid', '*').where({ eid }).first();
}

function update(eid, expense) {
	return db('expenses').where({ eid }).update(expense);
}

function remove(eid) {
	return db('expenses').where('eid', Number(eid)).del();
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
