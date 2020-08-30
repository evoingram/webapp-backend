const db = require("../../data/dbConfig");

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db("usc").select("*");
}

function findBy(filter) {
	return db("usc").where(filter);
}

async function add(singlecitation) {
	const [uscid] = await db("usc").insert(singlecitation, "uscid");
	return findById(uscid);
}

function findById(uscid) {
	return db("usc").select("uscid", "*").where({ uscid }).first();
}

function update(uscid, singlecitation) {
	return db("usc").where({ uscid }).update(singlecitation);
}

function remove(uscid) {
	return db("usc").where("uscid", Number(uscid)).del();
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
