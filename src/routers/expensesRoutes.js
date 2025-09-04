const express = require('express');
const router = express.Router();
const { addExpense, deleteExpense, getAllExpenses } = require('../controllers/expensesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/all', getAllExpenses)
router.post('/add', addExpense);
router.delete('/delete/:id', deleteExpense);

module.exports = router;