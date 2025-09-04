const ExpenseType = require('../models/expenseTypeModel');

const getAllTypes = (req, res) => {
    ExpenseType.find()
      .then(types => res.status(200).json(types))
      .catch(err => res.status(500).json({ message: 'Error fetching types', error: err }));
}
const addType = (req, res) => {
    const newType = JSON.parse(JSON.stringify(req.body));
    ExpenseType.create(newType);
  res.status(201).json({ message: 'Type added' });
}
const deleteType = (req, res) => {
    const typeId = req.params.id;
    ExpenseType.findByIdAndDelete(typeId)
      .then(() => res.status(200).json({ message: 'Type deleted' }))
      .catch(err => res.status(500).json({ message: 'Error deleting type', error: err }));
}

module.exports = { getAllTypes, addType, deleteType };