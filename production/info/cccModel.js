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
	return db("courtdatescasescustomers").select("*");
}

function findBy(filter) {
	return db("courtdatescasescustomers").where(filter);
}

function findById(cdccid) {
	return db("courtdatescasescustomers").select("cdccid", "*").where({ cdccid });
}
async function add(courtdate) {
	const [cdccid] = await db("courtdatescasescustomers").insert(courtdate, "cdccid");
	return findById(cdccid);
}

function update(cdccid, courtdate) {
	return db("courtdatescasescustomers").where({ cdccid }).update(courtdate);
}

function remove(cdccid) {
	return db("courtdatescasescustomers").where("cdccid", Number(cdccid)).del();
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
