import express from 'express';
import { getAllTasks,createTask,getTaskById,updateTask,deleteTask } from '../controller/taskController.js';
import { authenticateUser,addUser, getUser } from '../controller/userController.js';

const router = express.Router();

router.post('/addUser',addUser)
router.get('/', getAllTasks);
router.post('/tasks',authenticateUser,getUser, createTask);
router.get("/task/get",getTaskById);
router.put('/task/update',authenticateUser, updateTask);
router.delete('/task/delete',authenticateUser,deleteTask);

export default router
