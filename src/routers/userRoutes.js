const express = require('express');
const router = express.Router();
const { addUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.post('/add', addUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;