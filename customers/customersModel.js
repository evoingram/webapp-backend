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
	return db('customers').select('id', 'username', 'email');
}

function findBy(filter) {
	return db('customers').where(filter);
}

async function add(user) {
	const [id] = await db('customers').insert(user, 'id');
	return findById(id);
}

function findById(id) {
	return db('customers')
		.select('id', 'username', 'email')
		.where({ id })
		.first();
}

function update(id, user) {
	return db('customers')
		.where('id', Number(id))
		.update(user);
}

function remove(id) {
	return db('customers')
		.where('id', Number(id))
		.del();
}
