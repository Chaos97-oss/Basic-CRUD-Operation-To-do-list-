// Importing modules & Initialize your application
const express = require ('express');
const app = express();
const dotenv = require("dotenv");
require('dotenv').config();
const mongoose = require('mongoose');
dotenv.config()

//link database(optional)
// mongoose.connect(process.env.MONGODB_URL)
// .then(()=>console.log('Database Connected🗄 ..'));

//Use middleware//
app.use(express.json())



const task = []// Store tasks in memory
let items =[
  {id:"1", title:"Purchase Supplies", descriton: "Get milk, eggs and bread"}
] // Generate unique task IDs
//BASIC CRUD OPERATION

//Create
app.post('/task', async(req, res) =>{
  const{title, description}= req.body;
  
  
  if(!title || !description){
    return res.status(400).json({
      message: 'Title and Desctiption not found'
  
    });
  }
  const newTask ={
    id:task.length + 1,
    title, 
    description
  };
  task.push(newTask)
  res.status(200).json({
    message: "Task Created!",
    task: newTask
  });
  
  })

//Read
app.get('/', (req, res) => {
  res.json('To Do List!');
});

//Update
app.put('/task/:id', async (req, res) => {
  const{ id } = req.params
  const { title, descrption } = req.body
  
  if(!title || ! descrption){
    return res.status(400).json({
      message: 'Title and Desctiption not found' });
  
    }
    //find the task
    const task = items.find(t => t.id === taskid);
 
 
  if (!task){
    return res.status(404).json({
      message: "Task unavailable",
      task: todoUpdate});
    }
    //update the task
    task.title = title;
    task.descriton = description;
    res.status(200).json({message:"Task updated ✅", task});
});
//Delete
app.delete('/task/:id',(req, res)=>{
const taskId = req.params.id;
const taskIndex = items.findIndex(t => t.id === taskId);
if (taskIndex === -1){
  return res.status(404).json({ message: "Task unavailable"}); //Task unaviable

}
//Delete Task From Array
 items.splice(taskIndex, 1);
 res.status(200).json({message: "Task Deleted ✅"});
});

 // Start the server
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`🚀 Server Connected ...`);
});
