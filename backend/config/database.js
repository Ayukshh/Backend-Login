const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-login', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;