const db = require("../data/dbConfig");

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db("payments").select("*");
}

function findBy(filter) {
	return db("payments").where(filter);
}

async function add(payment) {
	const [pid] = await db("payments").insert(payment, "pid");
	return findById(pid);
}

function findById(pid) {
	return db("payments").select("pid", "*").where({ pid }).first();
}

function update(pid, payment) {
	return db("payments").where({ pid }).update(payment);
}

function remove(pid) {
	return db("payments").where("pid", Number(pid)).del();
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
