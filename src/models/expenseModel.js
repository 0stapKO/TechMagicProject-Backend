const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseType' },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number},
    date: { type: Date },
});

expenseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Expense', expenseSchema);