import React from 'react';
import {ThoughtCard} from '../ThoughtCard/ThoughtCard';

export const ThoughtList = ({thoughtList, deleteThought}) => {
  const thoughts = thoughtList.map(thought => {
    return (
      <ThoughtCard deleteThought={deleteThought} {...thought} key={thought.id} />
    )
  })

  return (
    <div>
      <h2>ThoughtList</h2>
      {thoughts}
    </div>
  );
}
