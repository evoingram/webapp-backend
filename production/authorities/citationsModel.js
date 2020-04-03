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
	return db('citations').select('*');
}

function findBy(filter) {
	return db('citations').where(filter);
}

async function add(singlecitation) {
	const [citationsid] = await db('citations').insert(singlecitation, 'citationsid');
	return findById(citationsid);
}

function findById(citationsid) {
	return db('citations').select('citationsid', '*').where({ citationsid }).first();
}

function update(citationsid, singlecitation) {
	return db('citations').where('citationsid', Number(citationsid)).update(singlecitation);
}

function remove(citationsid) {
	return db('citations').where('citationsid', Number(citationsid)).del();
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
