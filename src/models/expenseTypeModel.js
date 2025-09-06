const mongoose = require('mongoose');

const expenseTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String},
  max_amount: { type: Number, required: true },
});

expenseTypeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});


module.exports = mongoose.model('ExpenseType', expenseTypeSchema);