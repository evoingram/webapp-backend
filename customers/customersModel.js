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
	return db('customers').select('customersid', 'username', 'email');
}

function findBy(filter) {
	return db('customers').where(filter);
}

async function add(customer) {
	const [customersid] = await db('customers').insert(customer, 'customersid');
	return findById(customersid);
}

function findById(customersid) {
	return db('customers')
		.select('customersid', 'username', 'email')
		.where({ customersid })
		.first();
}

function update(customersid, user) {
	return db('customers')
		.where('customersid', Number(customersid))
		.update(user);
}

function remove(customersid) {
	return db('customers')
		.where('customersid', Number(customersid))
		.del();
}
