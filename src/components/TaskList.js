import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, filter, searchTerm, onDeleteTask }) {
    const filteredTasks = tasks.filter(task => {
        const matchesFilter = filter === 'All' || task.status === filter;
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className='task-list'>
            <h2>Tasks</h2>

            {filteredTasks.length === 0 ? (
                <p className='no-tasks'>No Tasks Found</p>
            ) : (
                <table className='task-table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Due Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onDeleteTask={onDeleteTask}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TaskList;