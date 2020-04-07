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
	return db('turnaroundtimes').select('*');
}

function findBy(filter) {
	return db('turnaroundtimes').where(filter);
}

async function add(turnaroundtime) {
	const [ttid] = await db('turnaroundtimes').insert(turnaroundtime, 'ttid');
	return findById(ttid);
}

function findById(ttid) {
	return db('turnaroundtimes').select('ttid', '*').where({ ttid }).first();
}

function update(ttid, turnaroundtime) {
	return db('turnaroundtimes').where({ ttid }).update(turnaroundtime);
}

function remove(ttid) {
	return db('turnaroundtimes').where('ttid', Number(ttid)).del();
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
