import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'To Do',
        priority: 'Medium',
        dueDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert('Please enter a task title');
            return;
        }

        onAddTask(formData);
        
        setFormData({
            title: '',
            description: '',
            status: 'To Do',
            priority: 'Medium',
            dueDate: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className='task-form'>
            <h2>Add New Task</h2>

            <div className='form-group'>
                <label>Title *</label>
                <input
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    placeholder='Enter task title'
                    required
                />
            </div>

            <div className='form-group'>
                <label>Description</label>
                <textarea
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    placeholder='Enter task description'
                    rows='3'
                />
            </div>

            <div className='form-row'>
                <div className='form-group'>
                    <label>Status</label>
                    <select
                        name='status'
                        value={formData.status}
                        onChange={handleChange}                    
                    >
                        <option value='To Do'>To Do</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Done'>Done</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label>Priority</label>
                    <select
                        name='priority'
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label>Due Date</label>
                    <input
                        type='date'
                        name='dueDate'
                        value={formData.dueDate}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <button type='submit' className='btn-add'>
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;