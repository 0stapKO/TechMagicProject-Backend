const express = require('express');
const router = express.Router();
const { addUser, deleteUser, getAllUsers, editUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/all', getAllUsers);
router.post('/add', addUser);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', editUser);

module.exports = router;