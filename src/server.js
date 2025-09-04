require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

// підключаємо MongoDB
connectDB();
require('./models/test');

// запускаємо сервер
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
