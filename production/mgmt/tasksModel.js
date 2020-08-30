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
	return db("tasks").select("*");
}

function findBy(filter) {
	return db("tasks").where(filter);
}

async function add(task) {
	const [tid] = await db("tasks").insert(task, "tid");
	return findById(tid);
}

function findById(tid) {
	return db("tasks").select("tid", "*").where({ tid });
}

function update(tid, task) {
	return db("tasks").where({ tid }).update(task);
}

function remove(tid) {
	return db("tasks").where("tid", Number(tid)).del();
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
