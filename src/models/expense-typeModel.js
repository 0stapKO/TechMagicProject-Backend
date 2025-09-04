const mongoose = require('mongoose');

const expenseTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  max_amount: { type: Number, required: true },
});

module.exports = mongoose.model('ExpenseType', expenseTypeSchema);