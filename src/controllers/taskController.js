import Task from '../models/taskSchema.js';
import { validateTaskData } from '../middlewares/validateData.js';

// Create a new task
export const createTask = async(req, res) => {
    try {
        validateTaskData(req.body);
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get all tasks
export const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get a single task by ID
export const getTaskById = async(req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }
        res.send(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Update a task by ID
export const updateTaskById = async(req, res) => {
    try {
        validateTaskData(req.body);
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }

        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error);
    }

};

// Delete a task by ID
export const deleteTaskById = async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }

        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error.message);
    }

};