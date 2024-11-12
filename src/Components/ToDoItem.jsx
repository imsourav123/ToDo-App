// src/components/ToDoItem.jsx
import React, { useState } from 'react';

function ToDoItem({ task, deleteTask, toggleCompleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleEdit = () => {
        editTask(task.id, editText);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleEdit}
                    onKeyUp={(e) => e.key === 'Enter' && handleEdit()}
                />
            ) : (
                <span onClick={() => toggleCompleteTask(task.id)}>{task.text}</span>
            )}
            <button className='btn-1' onClick={() => setIsEditing(!isEditing)}>Edit</button>
            <button className='btn-2' onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default ToDoItem;
