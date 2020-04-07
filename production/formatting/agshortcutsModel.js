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
	return db('agshortcuts').select('*');
}

function findBy(filter) {
	return db('agshortcuts').where(filter);
}

async function add(agshortcutset) {
	const [agsid] = await db('agshortcuts').insert(agshortcutset, 'agsid');
	return findById(agsid);
}

function findById(agsid) {
	return db('agshortcuts').select('agsid', '*').where({ agsid }).first();
}

function update(agsid, agshortcutset) {
	return db('agshortcuts').where({ agsid }).update(agshortcutset);
}

function remove(agsid) {
	return db('agshortcuts').where('agsid', Number(agsid)).del();
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
