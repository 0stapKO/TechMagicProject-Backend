const User = require('../models/userModel');
const mongoose = require('mongoose');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('department').populate('expenses'); 
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
}
const addUser = (req, res) => {
    const newUser = JSON.parse(JSON.stringify(req.body));
    User.create(newUser)
    .then(user => res.status(201).json(user.id));
}
const deleteUser = (req, res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
      .then(() => res.status(200).json({ message: 'User deleted' }))
      .catch(err => res.status(500).json({ message: 'Error deleting user', error: err }));
}
const editUser = (req, res) => {
    const userId = req.params.id;
    const updatedData = JSON.parse(JSON.stringify(req.body));
    updatedData.department = new mongoose.Types.ObjectId(updatedData.department.id)
    User.findByIdAndUpdate(userId, updatedData, { new: true })
        .populate('department', 'name').populate('expenses')
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => {res.status(500).json({ message: 'Error updating user', error: err })});
}

module.exports = { addUser, deleteUser, getAllUsers, editUser };