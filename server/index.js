const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const connectDB = require('./db');

// Initialize and setup database connection
const app = express();
connectDB();

// MIDDLEWARE //
app.use(cors());
app.use(express.json());

// ROUTES //
app.use('/api/cards', require('./routes/cards'))
app.use('/api/users', require('./routes/users'))

// Run Server
app.listen(8000, () => {
  console.log('Serving on port 8000');
});