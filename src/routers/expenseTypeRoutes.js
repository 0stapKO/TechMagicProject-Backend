const express = require('express');
const router = express.Router();
const { getAllTypes, addType, deleteType } = require('../controllers/expenseTypeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', getAllTypes)
router.post('/add', addType);
router.delete('/delete/:id', deleteType);

module.exports = router;