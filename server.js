const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 6000;

// Connect Database
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
