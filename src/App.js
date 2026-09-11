import React, { useState } from 'react';
import './styles/App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import TaskStats from './components/TaskStats';

function App() {
    const initialTasks = [
        {
            id: 1,
            title: 'Learn React',
            description: 'Build the task dashboard project',
            status: 'In Progress',
            priority: 'High',
            dueDate: new Date(2026, 8, 15)
        },
        {
            id: 2,
            title: 'Review Code',
            description: 'Check for bugs and optimize',
            status: 'To Do',
            priority: 'Medium',
            dueDate: new Date(2026, 8, 10)
        }
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        ));
    };

    const addTask = (newTask) => {
        setTasks([...tasks, {
            ...newTask,
            id: Date.now(),
            dueDate: newTask.dueDate ? new Date(newTask.dueDate) : null
        }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));  
    };

    return (
        <main className='container'>
            <h1>Task Dashboard</h1>
            <TaskStats tasks={tasks}/>
            <TaskForm onAddTask={addTask}/>
            <TaskFilters 
                filter={filter}
                setFilter={setFilter}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <TaskList 
                tasks={tasks}
                filter={filter}
                searchTerm={searchTerm}
                onDeleteTask={deleteTask}
                // onEditTask={editTask}
            />
        </main>
    )
}

export default App;