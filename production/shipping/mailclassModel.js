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
	return db('mailclass').select('*');
}

function findBy(filter) {
	return db('mailclass').where(filter);
}

async function add(singlemailclass) {
	const [mcid] = await db('mailclass').insert(singlemailclass, 'mcid');
	return findById(mcid);
}

function findById(mcid) {
	return db('mailclass').select('mcid', '*').where({ mcid });
}

function update(mcid, singlemailclass) {
	return db('mailclass').where('mcid', Number(mcid)).update(singlemailclass);
}

function remove(mcid) {
	return db('mailclass').where('mcid', Number(mcid)).del();
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
