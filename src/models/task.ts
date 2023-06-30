import mongoose, { Schema, model, models } from 'mongoose';

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    points: { type: Number, required: true },
    description1: [{type:String}],
    description2: [{type:String}],
    pdf: { type: Buffer },
    category: {type:mongoose.Types.ObjectId, ref: 'Category'},
    properties: {type: Object},
}, {
    timestamps: true, // this will add `createdAt` and `updatedAt` fields
  });

  export const Task = model('Task', TaskSchema);