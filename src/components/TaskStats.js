import React from 'react';

function TaskStats({ tasks }) {
    const total = tasks.length;
    const todo = tasks.filter(t => t.status === 'To Do').length;
    const inProgress = tasks.filter(t => t.status === 'In Progress').length;
    const done = tasks.filter(t => t.status === 'Done').length;

    const highPriority = tasks.filter(t => t.priority === 'High').length;
    const mediumPriority = tasks.filter(t => t.status === 'Medium').length;
    const lowPriority = tasks.filter(t => t.status === 'Low').length;

    return (
        <div className='tasks-stats'>
            <div className='stat-card'>
                <h3>Total</h3>
                <p className='stat-number'>{total}</p>
                <span className='stat-label'>Tasks</span>
            </div>

            <div className='stat-card stat-todo'>
                <h3>To Do</h3>
                <p className='stat-number'>{todo}</p>
                <span className='stat-label'>Tasks</span>
            </div>

            <div className='stat-card stat-progress'>
                <h3>In Progress</h3>
                <p className='stat-number'>{inProgress}</p>
                <span className='stat-label'>Tasks</span>
            </div>

            <div className='stat-card stat-done'>
                <h3>Done</h3>
                <p className='stat-number'>{done}</p>
                <span className='stat-label'>Tasks</span>
            </div>

            <div className='stat-card stat-priority'>
                <h3>Priority</h3>
                <div className='priority-stats'>
                    <span className="priority-high">🔴 {highPriority}</span>
                    <span className="priority-medium">🟡 {mediumPriority}</span>
                    <span className="priority-low">🟢 {lowPriority}</span>
                </div>
            </div>
        </div>
    );
}

export default TaskStats;