const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Route
app.use('/api/todos', require('./route/api/todos'));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
