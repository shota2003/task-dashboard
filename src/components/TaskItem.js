import React, { useState } from 'react';

function TaskItem({ task, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const formatDate = (date) => {
        if (!date) return 'No date';

        try {
            const dateObj = typeof date === 'string' ? new Date(date) : date;

            if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
                return 'Invalid date';
            }

            return dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch (error) {
            return 'Invalid date;'
        }
    };

    const getPriorityColor = (priority) => {
        const colors = {
            'High': 'priority-high',
            'Medium': 'priority-medium',
            'Low': 'priority-low'
        };
        return colors[priority] || '';
    };

    const handleSave = () => {
        const updatedTask = {
            ...editedTask,
            dueDate: editedTask.dueDate ? new Date(editedTask.dueDate) : null
        };
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedTask(task);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <tr>
                <td>
                    <input 
                        value={editedTask.title}
                        onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
                    />
                </td>
                <td>
                    <input 
                        value={editedTask.description || ''}
                        onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
                    />
                </td>
                <td>
                    <select 
                        value={editedTask.status}
                        onChange={(e) => setEditedTask({...editedTask, status: e.target.value})}
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </td>
                <td>
                    <select 
                        value={editedTask.priority}
                        onChange={(e) => setEditedTask({...editedTask, priority: e.target.value})}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </td>
                <td>
                    <input 
                        type="date"
                        value={editedTask.dueDate ? editedTask.dueDate.toISOString().split('T')[0] : ''}
                        onChange={(e) => setEditedTask({...editedTask, dueDate: new Date(e.target.value)})}
                    />
                </td>
                <td>
                    <button onClick={handleSave} className="btn-save">Save</button>
                    <button onClick={() => setIsEditing(false)} className="btn-cancel">Cancel</button>
                </td>
            </tr>
        );
    }

    return (
        <tr>
            <td>{task.title}</td>
            <td>{task.description || '-'}</td>
            <td>
                <span className={`status-${task.status.toLowerCase().replace(' ', '-')}`}>
                    {task.status}
                </span>
            </td>
            <td>
                <span className={`priority-badge ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                </span>
            </td>
            <td>{formatDate(task.dueDate)}</td>
            <td>
                <button
                    onClick={() => setIsEditing(true)}
                    className='btn-edit'
                >
                    ✏️ Edit
                </button>
                <button
                    onClick={() => onDeleteTask(task.id)}
                    className='btn-delete'
                >
                    🗑️ Delete
                </button>
            </td>
        </tr>
    );
}

export default TaskItem;