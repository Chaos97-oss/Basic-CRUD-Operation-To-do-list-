To-Do List API

Overview

This is a simple To-Do List API built using Node.js and Express.js. It allows users to create, read, update, and delete tasks (CRUD operations). This project uses an in-memory array for data storage, but it can be extended to use a database like MongoDB or PostgreSQL.

Features

Create a new task

Read all tasks or a specific task

Update a task

Delete a task

Technologies Used

Node.js - JavaScript runtime environment

Express.js - Web framework for Node.js

Postman (for API testing)

Installation

1. Clone the Repository

git clone https://github.com/yourusername/todo-list-api.git
cd todo-list-api

2. Install Dependencies

npm install

3. Run the Server

node server.js

Server will start on http://localhost:3000

API Endpoints

1. Create a Task

Method: POST

Endpoint: /api/tasks

Request Body:

{
  "title": "Buy groceries",
  "description": "Get milk, eggs, and bread"
}

Response:

{
  "id": 1,
  "title": "Buy groceries",
  "description": "Get milk, eggs, and bread",
  "status": "pending"
}

2. Read All Tasks

Method: GET

Endpoint: /api/tasks

Response:

[
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Get milk, eggs, and bread",
    "status": "pending"
  }
]

3. Read a Specific Task

Method: GET

Endpoint: /api/tasks/:id

Response:

{
  "id": 1,
  "title": "Buy groceries",
  "description": "Get milk, eggs, and bread",
  "status": "pending"
}

4. Update a Task

Method: PUT

Endpoint: /api/tasks/:id

Request Body:

{
  "title": "Buy groceries and fruits",
  "status": "completed"
}

Response:

{
  "id": 1,
  "title": "Buy groceries and fruits",
  "description": "Get milk, eggs, and bread",
  "status": "completed"
}

5. Delete a Task

Method: DELETE

Endpoint: /api/tasks/:id

Response:

{
  "message": "Task deleted successfully"
}

Next Steps

Integrate a database (MongoDB/PostgreSQL)

Add authentication for users

Implement better error handling

