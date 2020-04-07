const router = require('express').Router();

const Expenses = require('./expensesModel.js');
const restricted = require('../auth/restriction.js');

// GET:  get all expenses
router.get('/', restricted, (req, res) => {
	Expenses.find()
		.then(expenses => {
			res.status(200).json(expenses);
		})
		.catch(err => res.send(err));
});

// GET:  get one expense
router.get('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	if (!eid) {
		res.status(404).json({ message: `The expense with the specified eid ${eid} does not exist.` });
	} else {
		Expenses.findById(eid)
			.then(expense => {
				res.status(200).json(expense);
			})
			.catch(err => {
				res.status(500).json({
					message: `The expense information for ${eid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create expense
router.post('/', restricted, (req, res) => {
	const newExpense = req.body;

	Expenses.add(newExpense)
		.then(expense => {
			res.status(201).json(expense);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new expense.`, error: err });
		});
});

// PUT:  update expense
router.put('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	const updatedExpense = req.body;
	Expenses.update(eid, updatedExpense)
		.then(expense => {
			if (expense) {
				res.json(expense);
			} else {
				res.status(404).json({ message: `Could not find expense with given id ${eid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update expense.`, error: err });
		});
});
// DELETE:  delete expense
router.delete('/:eid', restricted, (req, res) => {
	const eid = req.params.eid;
	if (!eid) {
		res.status(404).json({ message: `The expense with the specified ID ${eid} does not exist.` });
	}
	Expenses.remove(eid)
		.then(expense => {
			res.json(expense);
		})
		.catch(err => {
			res.status(500).json({ message: `The expense could not be removed.`, error: err });
		});
});

module.exports = router;
