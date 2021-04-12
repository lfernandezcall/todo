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
    <div className="action-buttons-wrapper">
      {actionTypes.map((action) => (
        <button
          className={`action-button-${action.type}`}
          key={action.type}
          onClick={() =>
            dispatch(todoModified({ id: props.id, type: action.type }))
          }
        >
          {action.emoji}
        </button>
      ))}
    </div>
  );
};

export default ModifyTodo;
