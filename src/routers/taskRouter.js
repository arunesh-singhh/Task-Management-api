import express from 'express';
import * as taskController from '../controllers/taskController.js';

const router = express.Router();

// Create a new task
router.post('/tasks', taskController.createTask);

// Get all tasks
router.get('/tasks', taskController.getAllTasks);

// Get a single task by ID
router.get('/tasks/:id', taskController.getTaskById);

// Update a task by ID
router.patch('/tasks/:id', taskController.updateTaskById);

// Delete a task by ID
router.delete('/tasks/:id', taskController.deleteTaskById);

export default router;