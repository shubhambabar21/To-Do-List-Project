Project Overview

A To-Do List application allows users to create, view, update, and delete tasks. The application consists of three main components:

Front-End: Developed using React, this component handles the user interface and user interactions.
Back-End: Developed using Node.js and Express, this component provides an API to manage tasks and interacts with the database.
Database: MongoDB stores the tasks with their details (name, description, and completion status).

1. Front-End (React)

Purpose
The front-end is responsible for presenting the user interface, allowing users to interact with the application, and sending requests to the back-end API.

Components
Task Form:

Purpose: Allows users to input the task name and description.
Functionality: Captures user input and sends a request to add the task to the database.
Task List:

Purpose: Displays all tasks.
Functionality: Shows tasks retrieved from the back-end. Users can mark tasks as complete, incomplete, or delete them.
Task Item:

Purpose: Represents a single task in the list.
Functionality: Allows users to interact with individual tasks (e.g., mark as complete or delete).

User Interaction
Users can enter a task name and description into the form and submit it.
The front-end sends a POST request to the back-end to add the task.
The task list updates to show the new task.
Users can mark tasks as complete or incomplete and delete tasks using buttons associated with each task.
The front-end sends appropriate PATCH or DELETE requests to the back-end to update or remove tasks.

2. Back-End (Node.js and Express)

Purpose
The back-end provides an API for the front-end to interact with the database. It handles business logic and data management.

Components
API Routes:

GET /api/tasks: Retrieves all tasks from the database.
POST /api/tasks: Adds a new task to the database.
PATCH /api/tasks/:id: Updates a specific task (e.g., mark as complete/incomplete).
DELETE /api/tasks/:id: Deletes a specific task from the database.
Database Interaction:

Purpose: The back-end communicates with MongoDB to perform CRUD (Create, Read, Update, Delete) operations on tasks.
Functionality: Uses Mongoose (an ODM - Object Data Modeling library) to define a task schema and interact with the MongoDB database.

How It Works

Handling Requests:

The back-end receives HTTP requests from the front-end.
It processes these requests using route handlers and interacts with the MongoDB database.
CRUD Operations:

Create: Adds new tasks to the database when a POST request is made.
Read: Retrieves tasks from the database and sends them to the front-end.
Update: Updates task details based on PATCH requests.
Delete: Removes tasks from the database based on DELETE requests.

Workflow Summary

User Interaction:

Users interact with the React front-end, submitting tasks and performing actions on existing tasks.
Front-End to Back-End Communication:

The front-end sends HTTP requests to the back-end API based on user actions.
Back-End Processing:

The back-end processes requests, interacts with MongoDB, and performs the necessary CRUD operations.
Database Updates:

MongoDB stores and manages the task data.
Front-End Update:

The front-end receives updated task data from the back-end and refreshes the task list displayed to the user.