const ExpenseType = require('../models/expenseTypeModel');

const getAllTypes = (req, res) => {
    ExpenseType.find()
      .then(types => res.status(200).json(types))
      .catch(err => res.status(500).json({ message: 'Error fetching types', error: err }));
}
const addType = (req, res) => {
    const newType = JSON.parse(JSON.stringify(req.body));
    if(!newType.name) newType.name = 'Новий вид витрат'
    ExpenseType.create(newType)
    .then(type => {res.status(201).json(type.id)})
    .catch(err => res.status(500).json({ message: 'Error creating type', error: err }));
}
const deleteType = (req, res) => {
    const typeId = req.params.id;
    ExpenseType.findByIdAndDelete(typeId)
      .then(() => res.status(200).json({ message: 'Type deleted' }))
      .catch(err => res.status(500).json({ message: 'Error deleting type', error: err }));
}
const editType = (req, res) => {
    const typeId = req.params.id;
    const updatedData = JSON.parse(JSON.stringify(req.body));
    ExpenseType.findByIdAndUpdate(typeId, updatedData, { new: true })
      .then(updatedType => res.status(200).json(updatedType))
      .catch(err => res.status(500).json({ message: 'Error updating type', error: err }));
}

module.exports = { getAllTypes, addType, deleteType, editType };