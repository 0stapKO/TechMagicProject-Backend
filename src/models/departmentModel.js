const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String},
  workers_number: { type: Number, required: true },
});

departmentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Department', departmentSchema);