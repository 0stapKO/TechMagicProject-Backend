const express = require('express');
const router = express.Router();
const { addUser, deleteUser } = require('../controllers/userControllers');

router.post('/add', addUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;