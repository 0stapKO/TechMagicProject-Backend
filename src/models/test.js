// const Department = require('./departmentModel');
// const ExpenseType = require('./expense-typeModel');
const Expense = require('./expenseModel');
// const User = require('./userModel')

Expense.insertMany([
  {
    type: '68b9af9cce9a15700721434b', // ObjectId типу витрати
    department: '68b86ac6bbe823c7d0daf387', // ObjectId відділу
    amount: 150,
    date: new Date('2025-04-01')
  },
  {
    type: '68b9afdace9a15700721434e',
    department: '68bb1a8146cabe708146d533',
    amount: 200,
    date: new Date('2025-04-02')
  },
  {
    type: '68bc42a93fce0800974bdff6',
    department: '68bc5db9b234fed6286673e8',
    amount: 75.5,
    date: new Date('2025-04-03')
  }
])
