import mongoose from 'mongoose';

// Define the schema for tasks
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    }
});

// Create the Task model based on the schema
const Task = mongoose.model('Task', taskSchema);

export default Task;