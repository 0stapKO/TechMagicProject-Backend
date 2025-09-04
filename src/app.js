// app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('../src/routers/userRoutes');
const departmentRoutes = require('../src/routers/departmentRoutes');
const expenseTypeRoutes = require('../src/routers/expenseTypeRoutes');
const loginRoute = require('../src/routers/loginRoute');
const expenseRoute = require('../src/routers/expensesRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// маршрути
app.use('/api/users', userRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/expense-types', expenseTypeRoutes);
app.use('/api/login', loginRoute);
app.use('/api/expenses', expenseRoute);

// якщо маршрут не знайдено
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// обробка помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

module.exports = app;
