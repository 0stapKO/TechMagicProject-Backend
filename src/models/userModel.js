const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    // department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    // expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense'}],
    department: { type: String },
    expenses: [{ type: String }],
    password: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

module.exports = mongoose.model('User', userSchema);