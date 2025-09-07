const Expense = require('../models/expenseModel');

const getAllExpenses = (req, res) => {
    Expense.find().populate('department').populate('user').populate('type')
      .then(expenses => res.status(200).json(expenses))
      .catch(err => res.status(500).json({ message: 'Error fetching expenses', error: err }));
}
const addExpense = (req, res) => {
    const newExpense = req.body;
    Expense.create(newExpense).then((expense) => {
      res.status(201).json(expense.id);
    })
  }
  
const deleteExpense = (req, res) => {
    const expenseId = req.params.id;
    Expense.findByIdAndDelete(expenseId)
      .then(() => res.status(200).json({ message: 'Expense deleted' }))
      .catch(err => res.status(500).json({ message: 'Error deleting expense', error: err }));
}
const editExpense = (req, res) => {
  const expenseId = req.params.id;
  const updatedExpense = req.body;
  updatedExpense.user = updatedExpense.user.id;
  updatedExpense.department = updatedExpense.department.id;
  updatedExpense.type = updatedExpense.type.id;
  console.log(expenseId)
  Expense.findByIdAndUpdate(expenseId, updatedExpense, { new: true })
  .then(() => res.status(200).json({ message: 'Expense updated' }))
  .catch(err => res.status(500).json({ message: 'Error updating expense', error: err }));
}


module.exports = { addExpense, deleteExpense, getAllExpenses, editExpense };