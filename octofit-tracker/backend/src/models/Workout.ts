import { Schema, model } from 'mongoose';

export interface WorkoutDocument {
  title: string;
  duration: number;
  completed: boolean;
  createdAt: Date;
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    title: { type: String, required: true },
    duration: { type: Number, required: true, min: 0 },
    completed: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

export const Workout = model<WorkoutDocument>('Workout', workoutSchema);
