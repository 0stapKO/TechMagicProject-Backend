const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  workers_number: { type: Number, required: true },
});

module.exports = mongoose.model('Department', departmentSchema);