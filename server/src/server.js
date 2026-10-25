
import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js';

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');

    app.listen(port, () => {
      console.log(`Mohlay API listening on ${port}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

startServer();
