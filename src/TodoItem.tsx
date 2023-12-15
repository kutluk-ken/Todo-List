import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


interface TodoItemProps {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
  className?: string;
}


const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onDelete, onToggle }) => {
  // Apply the 'completed' class along with 'todoItem' when the task is completed
  const itemClasses = `todoItem ${completed ? 'completed' : ''}`;

  return (
    <div className={itemClasses}>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span>{text}</span>
      <button onClick={onDelete} className="deleteButton">
        <FontAwesomeIcon icon={faTrash} /> {/* Assuming FontAwesome is used */}
      </button>
    </div>
  );
};


export default TodoItem;
