// Importing modules & Initialize your application
const express = require ('express');
const app = express();
const dotenv = require("dotenv");
require('dotenv').config();
const mongoose = require('mongoose');//optional for database
dotenv.config()

//link database(optional)
// mongoose.connect(process.env.MONGODB_URL)
// .then(()=>console.log('Database Connected🗄 ..'));

//Use middleware//
app.use(express.json())



let items =[
  {id:"1", title:"Purchase Supplies", description: "Get milk, eggs and bread"}
] // Generate unique task ID's & Description

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
    id: (items.length + 1).toString(),
    title, 
    description
  };
  items.push(newTask)
  res.status(200).json({
    message: "Task Created!",
    task: newTask
  });
  
  })

//Read
app.get('/task', (req, res) => {
  res.json({
    items: items,
  });
});

//Update
app.put('/task/:id', async (req, res) => {
  const taskid = req.params.id;
  const { title, description } = req.body;
  
  if(!title || ! description){
    return res.status(400).json({
      message: 'Title and Desctiption not found' });
  
    }
    //find the task
    const freshTask = items.find(t => t.id === taskid);
 
 
  if (!freshTask){
    return res.status(404).json({
      message: "Task unavailable"});
    }
    //update the task
    freshTask.title = title;
    freshTask.descriton = description;
    res.status(200).json({message:"Task updated ✅", items: freshTask})
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
