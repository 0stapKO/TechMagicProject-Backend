const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String},
    name: { type: String},
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense'}],
    // department: { type: String },
    // expenses: [{ type: String }],
    password: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('User', userSchema);