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
	return db('brandingthemes').select('*');
}

function findBy(filter) {
	return db('brandingthemes').where(filter);
}

async function add(courtdate) {
	const [btid] = await db('brandingthemes').insert(courtdate, 'btid');
	return findById(btid);
}

function findById(btid) {
	return db('brandingthemes').select('btid', '*').where({ btid }).first();
}

function update(btid, courtdate) {
	return db('brandingthemes').where({ btid }).update(courtdate);
}

function remove(btid) {
	return db('brandingthemes').where('btid', Number(btid)).del();
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
