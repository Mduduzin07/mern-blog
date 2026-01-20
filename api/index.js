import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log('Environment loaded, PORT:', PORT);

// Debug: Check if MongoDB URI is loaded
console.log('MONGODB_URI loaded:', process.env.MONGODB_URI ? 'Yes' : 'No');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('Trying to connect with:', process.env.MONGODB_URI);
  });

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'API is running',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});