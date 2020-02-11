const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 6000;

// Connect Database
connectDB();

app.use(express.json({ extended: false }));
//app.use(bodyParser.json());

// Define Route
app.use('/api/todos', require('./route/api/todos'));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
