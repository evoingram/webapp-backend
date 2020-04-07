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
	return db('citationhyperlinks').select('*');
}

function findBy(filter) {
	return db('citationhyperlinks').where(filter);
}

async function add(singlecitation) {
	const [chid] = await db('citationhyperlinks').insert(singlecitation, 'chid');
	return findById(chid);
}

function findById(chid) {
	return db('citationhyperlinks').select('chid', '*').where({ chid }).first();
}

function update(chid, singlecitation) {
	return db('citationhyperlinks').where({ chid }).update(singlecitation);
}

function remove(chid) {
	return db('citationhyperlinks').where('chid', Number(chid)).del();
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
