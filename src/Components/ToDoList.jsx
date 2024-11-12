// src/components/ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, deleteTask, toggleCompleteTask, editTask }) {
    return (
        <div className="todo-list">
            {tasks.map((task) => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleteTask={toggleCompleteTask}
                    editTask={editTask}
                />
            ))}
        </div>
    );
}

export default ToDoList;
