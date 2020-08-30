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
	return db("appearances").select("*");
}

function findBy(filter) {
	return db("appearances").where(filter);
}
function findById(appid) {
	return db("appearances").select("*").where({ appid });
}

async function add(appearance) {
	const [appid] = await db("appearances").insert(appearance, "appid");
	return findById(appid);
}

function update(appid, appearance) {
	return db("appearances").where({ appid }).update(appearance);
}

function remove(appid) {
	return db("appearances").where("appid", Number(appid)).del();
}
