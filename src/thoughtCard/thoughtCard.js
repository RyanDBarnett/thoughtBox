import React from 'react';

export const ThoughtCard = ({title, body, id, deleteThought}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => deleteThought(id)}>X</button>
      <button>Edit</button>
    </div>
  )
}
