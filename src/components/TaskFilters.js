import React from 'react';

function TaskFilters({ filter, setFilter, searchTerm, setSearchTerm }) {
    return (
        <div className='task-filters'>
            <div className='filter-group'>
                <label>Search:</label>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search tasks...'
                    className='search-input'
                />
            </div>

            <div className='filter-group'>
                <label>Status Filter:</label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className='filter-select'
                >
                    <option value='All'>All</option>
                    <option value='To Do'>To Do</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Done'>Done</option>
                </select>
            </div>
        </div>
    );
}

export default TaskFilters;