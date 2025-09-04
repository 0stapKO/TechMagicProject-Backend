const express = require('express');
const router = express.Router();
const { addDepartment, deleteDepartment, getAllDepartments } = require('../controllers/departmentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', getAllDepartments)
router.post('/add', addDepartment);
router.delete('/delete/:id', deleteDepartment);

module.exports = router;