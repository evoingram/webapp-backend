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
	return db("communicationhistory").select("*");
}

function findBy(filter) {
	return db("communicationhistory").where(filter);
}

async function add(communication) {
	const [chid] = await db("communicationhistory").insert(communication, "chid");
	return findById(chid);
}

function findById(chid) {
	return db("communicationhistory").select("chid", "*").where({ chid }).first();
}

function update(chid, communication) {
	return db("communicationhistory").where({ chid }).update(communication);
}

function remove(chid) {
	return db("communicationhistory").where("chid", Number(chid)).del();
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
