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
	const [expensesid] = await db('expenses').insert(expense, 'expensesid');
	return findById(expensesid);
}

function findById(expensesid) {
	return db('expenses').select('expensesid', '*').where({ expensesid }).first();
}

function update(expensesid, expense) {
	return db('expenses').where('expensesid', Number(expensesid)).update(expense);
}

function remove(expensesid) {
	return db('expenses').where('expensesid', Number(expensesid)).del();
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
