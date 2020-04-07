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
	return db('staff').select('*');
}

function findBy(filter) {
	return db('staff').where(filter);
}

async function add(contractor) {
	const [stfid] = await db('staff').insert(contractor, 'stfid');
	return findById(stfid);
}

function findById(stfid) {
	return db('staff').select('stfid', '*').where({ stfid });
}

function update(stfid, contractor) {
	return db('staff').where({ stfid }).update(contractor);
}

function remove(stfid) {
	return db('staff').where('stfid', Number(stfid)).del();
}
