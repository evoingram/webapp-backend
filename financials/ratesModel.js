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
	return db('rates').select('*');
}

function findBy(filter) {
	return db('rates').where(filter);
}

async function add(rate) {
	const [ratesid] = await db('rates').insert(rate, 'ratesid');
	return findById(ratesid);
}

function findById(ratesid) {
	return db('rates').select('ratesid', '*').where({ ratesid }).first();
}
function update(ratesid, rate) {
	return db('rates')
		.select('code', 'inventoryratecode', 'productname', 'dsecription', 'rate')
		.where({ ratesid })
		.update(rate);
}
/*
async function update(ratesid, rate) {
	const [ratesidA] = await db('rates').update(rate);
	return findById(ratesidA);
}
*/

function remove(ratesid) {
	return db('rates').where('ratesid', Number(ratesid)).del();
}
