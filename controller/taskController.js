
import Task from "../Schemas/taskSchema.js"
import mongoose from "mongoose";

export const getAllTasks = async(req,res)=>{
try{
    const allTask =await Task.find();

    if(allTask){
        res.send(allTask)
    }else{
        res.status(400).json("no tasks available")
    }
}catch(error){
    console.error(error)
}


}



export const createTask=async(req,res)=>{
    const task = req.body
try{
    const newTask =  new Task(task);
    await newTask.save()
    if(task){
        res.status(200).json("new task created")
    }else{
        res.status(400).json("no tasks available")
    }
}catch(error){
    console.error(error)
}


}




// router.get('/tasks', taskController.getAllTasks);
// router.get('/tasks/:id', taskController.getTaskById);
// router.put('/tasks/:id', taskController.updateTask);
// router.delete('/tasks/:id', taskController.deleteTask);



export const getTaskById=async(req,res)=>{
   const taskId= req.query.id
try{
    const taskById = await Task.findById(taskId);
    if(taskById){
        res.status(200).json(taskById)
    }else{
        res.status(400).json('task not found')

    }
}catch(error){
    console.error(error)
    res.send(error)
}


}


export const updateTask=async(req,res)=>{
    const id = req.query.id
    const data = req.body
    console.log(id,data)
 try{
     const updateUser = await Task.findByIdAndUpdate(id,data);
     if(updateUser){
         res.status(200).json('tas updated')
     }else{
         res.status(400).json('task not found')
 
     }
 }catch(error){
     console.error(error)
     res.send(error)
 }
 
 
 }


 

 export const deleteTask =async(req,res)=>{
    const id = req.query.id
 try{
     const deleteTask = await Task.findByIdAndDelete(id);
     if(deleteTask){
         res.status(200).json('task deleted')
     }else{
         res.status(400).json('task not found')
 
     }
 }catch(error){
     console.error(error)
     res.send(error)
 }
 
 
 }