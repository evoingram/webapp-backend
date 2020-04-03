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
	return db('tasks').select('*');
}

function findBy(filter) {
	return db('tasks').where(filter);
}

async function add(task) {
	const [tasksid] = await db('tasks').insert(task, 'tasksid');
	return findById(tasksid);
}

function findById(tasksid) {
	return db('tasks').select('tasksid', '*').where({ tasksid }).first();
}

function update(tasksid, task) {
	return db('tasks').where('tasksid', Number(tasksid)).update(task);
}

function remove(tasksid) {
	return db('tasks').where('tasksid', Number(tasksid)).del();
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
