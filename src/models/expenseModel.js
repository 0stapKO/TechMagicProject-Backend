const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseType' },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
});

module.exports = mongoose.model('Expense', expenseSchema);