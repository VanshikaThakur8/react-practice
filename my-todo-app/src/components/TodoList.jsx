import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, editTodo, toggleEdit }) {
  return (
    <div className="w-full max-w-md">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleEdit={toggleEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
