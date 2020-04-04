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
router.get('/:expensesid', restricted, (req, res) => {
	const expensesid = req.params.expensesid;
	if (!expensesid) {
		res.status(404).json({ message: `The expense with the specified expensesid ${expensesid} does not exist.` });
	} else {
		Expenses.findById(expensesid)
			.then(expense => {
				res.status(201).json(expense);
			})
			.catch(err => {
				res.status(500).json({
					message: `The expense information for ${expensesid} could not be retrieved.`,
					error: err
				});
			});
	}
});

// POST:  create expense
router.post('/', restricted, (req, res) => {
	const newExpense = req.body.status;

	Expenses.add(newExpense)
		.then(expense => {
			res.status(201).json(expense);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new expense.`, error: err });
		});
});

// PUT:  update expense
router.put('/:expensesid', restricted, (req, res) => {
	const expensesid = req.params.expensesid;
	const updatedExpense = { status: req.body.expense };

	Expenses.update(expensesid, updatedExpense)
		.then(expense => {
			if (status) {
				res.json(expense);
			} else {
				res.status(404).json({ message: `Could not find expense with given id ${expensesid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update expense.`, error: err });
		});
});
// DELETE:  delete expense
router.delete('/:expensesid', restricted, (req, res) => {
	const expensesid = req.params.expensesid;
	if (!expensesid) {
		res.status(404).json({ message: `The expense with the specified ID ${expensesid} does not exist.` });
	}
	Expenses.remove(expensesid)
		.then(expense => {
			res.json(expense);
		})
		.catch(err => {
			res.status(500).json({ message: `The expense could not be removed.`, error: err });
		});
});

module.exports = router;
