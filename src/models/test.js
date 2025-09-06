// const Department = require('./departmentModel');
// const ExpenseType = require('./expense-typeModel');
// const Expense = require('./expenseModel');
const User = require('./userModel')

User.insertMany([
    {
        name: 'Brad Pitt',
        email: 'bradpitt@email.com',
        role: 'admin',
        password: 'password'
    },
    {
        name: 'Zendaya',
        email: 'zendaya@email.com',
        role: 'admin',
        password: 'password'
    },
    {
        name: 'Johnny Depp',
        email: 'johnnydepp@email.com',
        role: 'admin',
        password: 'password'
    },
    {
        name: 'Tom Holland',
        email: 'tomholland@email.com',
        role: 'user',
        password: 'password'
    },
    {
        name: 'Christian Bale',
        email: 'christianbale@email.com',
        role: 'user',
        password: 'password'
    },
])
