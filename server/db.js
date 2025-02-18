require('dotenv').config();
const mongoose = require('mongoose');


let username = process.env.DB_USER
let password = process.env.DB_PASSWORD
let uri = `mongodb+srv://${username}:${password}@consequencecluster.hr2vh.mongodb.net/consequenceDB?retryWrites=true&w=majority&appName=ConsequenceCluster`

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
