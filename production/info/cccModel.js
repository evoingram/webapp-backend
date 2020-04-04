const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	update,
	remove
};

function find() {
	return db('courtdatescasescustomers').select('*');
}

function findBy(filter) {
	return db('courtdatescasescustomers').where(filter);
}

async function add(courtdate) {
	const [cdccid] = await db('courtdatescasescustomers').insert(courtdate, 'cdccid');
	return findById(cdccid);
}

function update(cdccid, courtdate) {
	return db('courtdatescasescustomers').where('cdccid', Number(cdccid)).update(courtdate);
}

function remove(cdccid) {
	return db('courtdatescasescustomers').where('cdccid', Number(cdccid)).del();
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
