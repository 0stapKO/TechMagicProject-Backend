const express = require('express');
const router = express.Router();
const { addExpense, deleteExpense, getAllExpenses, editExpense } = require('../controllers/expensesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/all', getAllExpenses)
router.post('/add', addExpense);
router.delete('/delete/:id', deleteExpense);
router.put('/update/:id', editExpense)

module.exports = router;