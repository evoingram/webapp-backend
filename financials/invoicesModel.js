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
	return db("invoices").select("*");
}

function findBy(filter) {
	return db("invoices").where(filter);
}

async function add(invoice) {
	const [iid] = await db("invoices").insert(invoice, "iid");
	return findById(iid);
}

function findById(iid) {
	return db("invoices").select("iid", "*").where({ iid }).first();
}

function update(iid, invoice) {
	return db("invoices").where({ iid }).update(invoice);
}

function remove(iid) {
	return db("invoices").where("iid", Number(iid)).del();
}
