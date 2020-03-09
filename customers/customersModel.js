const db = require('../data/dbConfig');

// list of all functions used for customer table
module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// returns list of customers, displays customersid, username, email
function find() {
	return db('customers').select('customersid', 'username', 'email');
}

// returns list of customers or single customer, displays all fields
function findBy(filter) {
	return db('customers').where(filter);
}

// adds a customer (register function)
async function add(customer) {
	const [customersid] = await db('customers').insert(customer, 'customersid');
	return findById(customersid);
}

// returns a customer by ID number
function findById(customersid) {
	return db('customers')
		.select('customersid', 'username', 'email')
		.where({ customersid })
		.first();
}

// updates a customer
function update(customersid, user) {
	return db('customers')
		.where('customersid', Number(customersid))
		.update(user);
}

// deletes a customer
// TODO: Make sure it removes all associated data
function remove(customersid) {
	return db('customers')
		.where('customersid', Number(customersid))
		.del();
}
