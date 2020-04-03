const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findAppsById,
	update,
	remove
};

function find() {
	return db('courtdates').select('*');
}

function findBy(filter) {
	return db('courtdates').where(filter);
}

async function add(courtdate) {
	const [courtdatesid] = await db('courtdates').insert(courtdate, 'courtdatesid');
	return findById(courtdatesid);
}

function findAppsById(courtdatesid) {
	return db('appearances')
		.select(
			'courtdates.courtdatesid',
			'appearances.appid',
			'appearances.cdappid',
			'appearances.customersid',
			'appearances.courtdatesid',
			'customers.customersid',
			'customers.factoring',
			'customers.company',
			'customers.mrms',
			'customers.lastname',
			'customers.firstname',
			'customers.email',
			'customers.jobtitle',
			'customers.businessphone',
			'customers.address1',
			'customers.address2',
			'customers.city',
			'customers.state',
			'customers.zip',
			'customers.notes'
		)
		.innerJoin('courtdates', 'appearances.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('customers', 'appearances.customersid', 'customers.customersid')
		.where({ courtdatesid });
}

function update(courtdatesid, courtdate) {
	return db('courtdates')
		.where('courtdatesid', Number(courtdatesid))
		.update(courtdate);
}

function remove(courtdatesid) {
	return db('courtdates')
		.where('courtdatesid', Number(courtdatesid))
		.del();
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
