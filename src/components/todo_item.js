import React from 'react';

const TodoItem = ({item}) => {
  return (
    <div className="todo-list">
      <h2>Your todo lists include:</h2>
      <ul>
        {item.map(i => (
          <li key={i.toString()}>{i}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItem