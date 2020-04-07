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
	return db('shippingoptions').select('*');
}

function findBy(filter) {
	return db('shippingoptions').where(filter);
}

async function add(package) {
	const [soid] = await db('shippingoptions').insert(package, 'soid');
	return findById(soid);
}

function findById(soid) {
	return db('shippingoptions').select('soid', '*').where({ soid }).first();
}

function update(soid, package) {
	return db('shippingoptions').where({ soid }).update(package);
}

function remove(soid) {
	return db('shippingoptions').where('soid', Number(soid)).del();
}
