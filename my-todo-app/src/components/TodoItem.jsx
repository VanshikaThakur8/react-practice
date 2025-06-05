import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, editTodo, toggleEdit }) {
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText.trim());
    }
  };

  return (
    <div className="flex justify-between items-center bg-white rounded shadow p-3 mb-2">
      {todo.isEditing ? (
        <input
          className="flex-1 border border-gray-300 px-2 py-1 mr-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className="flex-1">{todo.text}</span>
      )}
      <div className="flex gap-2">
        {todo.isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 hover:text-green-800"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => toggleEdit(todo.id)}
            className="text-yellow-600 hover:text-yellow-800"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
