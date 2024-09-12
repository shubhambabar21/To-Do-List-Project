import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ name: '', description: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const handleChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const addTask = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/tasks', newTask)
            .then(response => {
                setTasks([...tasks, response.data]);
                setNewTask({ name: '', description: '' });
            })
            .catch(error => console.error('Error adding task:', error));
    };

    const toggleComplete = (id, completed) => {
        axios.patch(`http://localhost:5000/api/tasks/${id}`, { completed: !completed })
            .then(response => {
                setTasks(tasks.map(task => task._id === id ? response.data : task));
            })
            .catch(error => console.error('Error updating task:', error));
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/api/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task._id !== id));
            })
            .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    name="name"
                    value={newTask.name}
                    onChange={handleChange}
                    placeholder="Task Name"
                    required
                />
                <textarea
                    name="description"
                    value={newTask.description}
                    onChange={handleChange}
                    placeholder="Task Description"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task._id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <strong>{task.name}</strong>: {task.description}
                        <button onClick={() => toggleComplete(task._id, task.completed)}>
                            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
