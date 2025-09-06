const Expense = require('../models/expenseModel');

const getAllExpenses = (req, res) => {
    Expense.find()
      .then(expenses => res.status(200).json(expenses))
      .catch(err => res.status(500).json({ message: 'Error fetching expenses', error: err }));
}
const addExpense = (req, res) => {
    const newExpense = JSON.parse(JSON.stringify(req.body));
    Expense.create(newExpense);
  res.status(201).json({ message: 'Expense added' });
}
const deleteExpense = (req, res) => {
    const expensetId = req.params.id;
    Expense.findByIdAndDelete(expenseId)
      .then(() => res.status(200).json({ message: 'Expense deleted' }))
      .catch(err => res.status(500).json({ message: 'Error deleting expense', error: err }));
}


module.exports = { addExpense, deleteExpense, getAllExpenses };