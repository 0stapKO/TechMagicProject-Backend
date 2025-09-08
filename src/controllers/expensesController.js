const Expense = require('../models/expenseModel');
const ExpenseType = require('../models/expenseTypeModel');

const getAllExpenses = (req, res) => {
    Expense.find().populate('department').populate('user').populate('type')
      .then(expenses => res.status(200).json(expenses))
      .catch(err => res.status(500).json({ message: 'Error fetching expenses', error: err }));
}
const addExpense = (req, res) => {
    const newExpense = req.body;
    console.log(newExpense)
    const user = req.user;
    if(user.role === 'user') {
      newExpense.user = user.id;
      Expense.create(newExpense)
      .then(expense => {
              return ExpenseType.updateOne(
          { _id: expense.type }, // знаходимо тип витрати за `type` з нової витрати
          { $inc: { spent: expense.amount } } // збільшуємо поле `spent` на `amount`
        );
      })
    }
    Expense.create(newExpense)
    // .then(expense => {
    //         return ExpenseType.updateOne(
    //     { _id: expense.type }, // знаходимо тип витрати за `type` з нової витрати
    //     { $inc: { spent: expense.amount } } // збільшуємо поле `spent` на `amount`
    //   );
    // })
    .then((expense) => {
      res.status(201).json(expense.id);
    })
  }
  

const deleteExpense = (req, res) => {
    const expenseId = req.params.id;
    Expense.findByIdAndDelete(expenseId)
    .then((expense) => {
      return ExpenseType.updateOne(
        { _id: expense.type }, // знаходимо тип витрати за `type` з нової витрати
        { $inc: { spent: -expense.amount } } 
      )
    })
    .then(() => res.status(200).json({ message: 'Expense deleted' }))
    .catch(err => res.status(500).json({ message: 'Error deleting expense', error: err }));
}
const editExpense = (req, res) => {
  const expenseId = req.params.id;
  const updatedExpense = req.body;
  console.log(expenseId)
  updatedExpense.user = updatedExpense.user.id;
  updatedExpense.department = updatedExpense.department.id;
  updatedExpense.type = updatedExpense.type.id;
  let oldExpense;
  Expense.findById(expenseId).then(expense => {
    oldExpense = expense.amount;
    console.log(oldExpense)
    console.log(expense)
  })
  
  Expense.findByIdAndUpdate(expenseId, updatedExpense, { new: true })
  .then(expense => { return ExpenseType.updateOne(
        { _id: expense.type }, // знаходимо тип витрати за `type` з нової витрати
        { $inc: { spent: expense.amount-oldExpense } } // збільшуємо поле `spent` на `amount`
  ) } )
  .then(() => res.status(200).json({ message: 'Expense updated' }))
  .catch(err => res.status(500).json({ message: 'Error updating expense', error: err }));
}
const getUserExpense = (req, res) => {
  const userId = req.params.id;
  Expense.find({user: userId}).populate('department').populate('user').populate('type')
  .then((expenses) => { console.log(expenses); res.status(200).json(expenses)})
  .catch(err => res.status(500).json({ message: 'Error updating expense', error: err }));
}


module.exports = { addExpense, deleteExpense, getAllExpenses, editExpense, getUserExpense };