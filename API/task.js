const express = require('express');




const app = express();

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
res.status(201).json({
  message: "Task Created!",
  task: newTask
});

})
module.exports = api;