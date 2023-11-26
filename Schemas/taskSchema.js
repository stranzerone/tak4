import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  key:{type:String,required:true},
  title: { type: String, required: true },
  description: { type: String },
  assignedUser: { type:String, required:true },
  dueDate: { type: Date, required:true },
  completionStatus: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;


