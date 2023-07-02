import mongoose, { Schema, Model } from 'mongoose';

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  points: { type: Number, required: true },
  description1: [{ type: String }],
  description2: [{ type: String }],
  active: Boolean,
  pdf: { type: File },
  category: { type: mongoose.Types.ObjectId, ref: 'Category' },
  properties: { type: Object },
  testingSuite: { type: File },
  startDate: { type: Date, default: Date.now }, // Add startDate field with default value of current date
  deadline: { type: Date }, // Add deadline field
}, {
  timestamps: true, // This will add `createdAt` and `updatedAt` fields
});

export interface TaskModel extends Model<TaskDocument> {
  // Add any custom static methods or instance methods here
}

export interface TaskDocument extends mongoose.Document {
  // title: string;
  // description: string;
  // points: number;
  // description1: string[];
  // description2: string[];
  // active: boolean;
  // pdf: File | null;
  // category: mongoose.Types.ObjectId;
  // properties: Record<string, unknown>;
  // testingSuite: File | null;
  // startDate: Date;
  // deadline: Date;
  _id: string;
  title: string;
  description: string;
  points: number;
  description1: string[];
  description2: string[];
  active: boolean;
  category: string; // Change the type to string
  properties: Record<string, unknown> | {};
  pdf: File | null;
  testingSuite: File | null;
  startDate: Date;
  deadline: Date | null;

}

export default mongoose.models.Task || mongoose.model<TaskDocument, TaskModel>('Task', TaskSchema);
