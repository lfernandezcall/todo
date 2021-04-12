import React from 'react';
import { useDispatch } from 'react-redux';
import { todoModified } from './todoSlice';

const ModifyTodo = (props) => {
  const dispatch = useDispatch();

  const actionTypes = [
    { type: 'done', emoji: '✅' },
    { type: 'modified', emoji: '🖊' },
    { type: 'deleted', emoji: '🗑' },
  ];

  return (
    <section>
      {actionTypes.map((action) => (
        <button
          key={action.type}
          onClick={() =>
            dispatch(todoModified({ id: props.id, type: action.type }))
          }
        >
          {action.emoji}
        </button>
      ))}
    </section>
  );
};

export default ModifyTodo;
