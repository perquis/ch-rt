import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('The MONGODB_URI must be set.');
  process.exit(1);
}

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.error('Failed to connect to MongoDB.', error);
    process.exit(1);
  }
};
