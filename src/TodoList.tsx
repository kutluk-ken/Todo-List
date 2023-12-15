import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './TodoList.css'; // Import the CSS file
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todoList">
      <h1 className="todoListTitle">Todo List</h1>
      <TodoForm onAdd={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => toggleTodo(index)}
          onDelete={() => deleteTodo(index)}
          className="todoItem"
        />
      ))}
    </div>
  );
};  

export default TodoList;
