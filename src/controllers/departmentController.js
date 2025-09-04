const Department = require('../models/departmentModel');

const getAllDepartments = (req, res) => {
    Department.find()
      .then(departments => res.status(200).json(departments))
      .catch(err => res.status(500).json({ message: 'Error fetching departments', error: err }));
}
const addDepartment = (req, res) => {
    const newDepartment = JSON.parse(JSON.stringify(req.body));
    Department.create(newDepartment);
  res.status(201).json({ message: 'Department added' });
}
const deleteDepartment = (req, res) => {
    const departmentId = req.params.id;
    Department.findByIdAndDelete(departmentId)
      .then(() => res.status(200).json({ message: 'Department deleted' }))
      .catch(err => res.status(500).json({ message: 'Error deleting department', error: err }));
}

module.exports = { addDepartment, deleteDepartment, getAllDepartments };