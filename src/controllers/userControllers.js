const User = require('../models/userModel');

const addUser = (req, res) => {
    const newUser = JSON.parse(JSON.stringify(req.body));
    console.log(newUser);
    User.create(newUser);
  res.status(201).json({ message: 'User added' });
}
const deleteUser = (req, res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
      .then(() => res.status(200).json({ message: 'User deleted' }))
      .catch(err => res.status(500).json({ message: 'Error deleting user', error: err }));
}

module.exports = { addUser, deleteUser };