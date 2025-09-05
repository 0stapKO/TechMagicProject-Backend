const Department = require('../models/departmentModel');

const getAllDepartments = (req, res) => {
    Department.find()
      .then(departments => res.status(200).json(departments))
      .catch(err => res.status(500).json({ message: 'Error fetching departments', error: err }));
}
const addDepartment = (req, res) => {
    const newDepartment = JSON.parse(JSON.stringify(req.body));
    Department.create(newDepartment)
      .then(department => res.status(201).json(department.id))
      .catch(err => res.status(500).json({ message: 'Error creating department', error: err }));
}
const deleteDepartment = (req, res) => {
    const departmentId = req.params.id;
    Department.findByIdAndDelete(departmentId)
      .then(() => res.status(200).json({ message: 'Department deleted' }))
      .catch(err => res.status(500).json({ message: 'Error deleting department', error: err }));
}

const editDepartment = (req, res) => {
    const departmentId = req.params.id;
    const updatedData = JSON.parse(JSON.stringify(req.body));
    Department.findByIdAndUpdate(departmentId, updatedData, { new: true })
      .then(updatedDepartment => res.status(200).json(updatedDepartment))
      .catch(err => res.status(500).json({ message: 'Error updating department', error: err }));
}

module.exports = { addDepartment, deleteDepartment, getAllDepartments, editDepartment};