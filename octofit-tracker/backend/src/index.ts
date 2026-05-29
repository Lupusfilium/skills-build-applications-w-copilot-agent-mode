import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import { Workout } from './models/Workout.js';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit';

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    backendPort: port,
    mongoUri,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/workouts', async (req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 });
  res.json(workouts);
});

app.post('/api/workouts', async (req, res) => {
  const workout = new Workout(req.body);
  await workout.save();
  res.status(201).json(workout);
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB on port 27017');
    app.listen(port, () => {
      console.log(`Backend server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });
