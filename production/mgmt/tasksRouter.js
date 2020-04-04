const router = require('express').Router();

const Tasks = require('./tasksModel.js');
const restricted = require('../../auth/restriction.js');

// GET:  get all tasks
router.get('/', restricted, (req, res) => {
	Tasks.find()
		.then(task => {
			res.status(200).json(task);
		})
		.catch(err => res.send(err));
});

// GET:  get one task
router.get('/:tasksid', restricted, (req, res) => {
	const tasksid = req.params.tasksid;
	if (!tasksid) {
		res.status(404).json({ message: `The task with the specified tasksid ${tasksid} does not exist.` });
	} else {
		Tasks.findById(tasksid)
			.then(task => {
				res.status(201).json(task);
			})
			.catch(err => {
				res.status(500).json({ message: 'The task information could not be retrieved.', error: err });
			});
	}
});

// POST:  create task
router.post('/', restricted, (req, res) => {
	const newTask = req.body.task;

	Tasks.add(newTask)
		.then(task => {
			res.status(201).json(task);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new task', error: err });
		});
});

// PUT:  update task
router.put('/:tasksid', restricted, (req, res) => {
	const tasksid = req.params.tasksid;
	const updatedTask = { task: req.body.task };

	Tasks.update(tasksid, updatedTask)
		.then(task => {
			if (task) {
				res.json(task);
			} else {
				res.status(404).json({ message: `Could not find task with given id ${tasksid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update task', error: err });
		});
});
// DELETE:  delete task
router.delete('/:tasksid', restricted, (req, res) => {
	const tasksid = req.params.tasksid;
	if (!tasksid) {
		res.status(404).json({ message: `The task with the specified tasksid ${tasksid} does not exist.` });
	}
	Tasks.remove(tasksid)
		.then(task => {
			res.json(task);
		})
		.catch(err => {
			res.status(500).json({ message: 'The task could not be removed.', error: err });
		});
});

module.exports = router;
