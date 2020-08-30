const router = require("express").Router();

const Tasks = require("./tasksModel.js");
const restricted = require("../../auth/restriction.js");
const restrictedA = require("../../auth/restrictionA.js");
const restrictedC = require("../../auth/restrictionC.js");
const restrictedM = require("../../auth/restrictionM.js");

// GET:  get all tasks
router.get("/", restrictedC, (req, res) => {
	Tasks.find()
		.then((task) => {
			res.status(200).json(task);
		})
		.catch((err) => res.send(err));
});

// GET:  get one task
router.get("/:tid", restricted, (req, res) => {
	const tid = req.params.tid;
	if (!tid) {
		res.status(404).json({ message: `The task with the specified tid ${tid} does not exist.` });
	} else {
		Tasks.findById(tid)
			.then((task) => {
				res.status(200).json(task);
			})
			.catch((err) => {
				res.status(500).json({ message: "The task information could not be retrieved.", error: err });
			});
	}
});

// POST:  create task
router.post("/", restrictedM, (req, res) => {
	const newTask = req.body;

	Tasks.add(newTask)
		.then((task) => {
			res.status(201).json(task);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to create new task", error: err });
		});
});

// PUT:  update task
router.put("/:tid", restrictedM, (req, res) => {
	const tid = req.params.tid;
	const updatedTask = req.body;

	Tasks.update(tid, updatedTask)
		.then((task) => {
			if (task) {
				res.json(task);
			} else {
				res.status(404).json({ message: `Could not find task with given id ${tid}` });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to update task", error: err });
		});
});
// DELETE:  delete task
router.delete("/:tid", restrictedM, (req, res) => {
	const tid = req.params.tid;
	if (!tid) {
		res.status(404).json({ message: `The task with the specified tid ${tid} does not exist.` });
	}
	Tasks.remove(tid)
		.then((task) => {
			res.json(task);
		})
		.catch((err) => {
			res.status(500).json({ message: "The task could not be removed.", error: err });
		});
});

module.exports = router;
