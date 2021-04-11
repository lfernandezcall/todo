import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModifyTodo from './ModifyTodo';
import { useDispatch } from 'react-redux';
import { editItem, todoModified } from './todoSlice';

const TodoList = () => {
  const todoItems = useSelector((state) => state.todoItems);
  const [editText, setEditText] = useState('');
  const onChange = (e) => setEditText(e.target.value);
  const dispatch = useDispatch();

  const saveEdit = (e, item) => {
    e.preventDefault();
    dispatch(editItem({ id: item.id, type: 'text', editText: editText }));
    setEditText('');
  };

  return (
    <ul>
      {todoItems.map((item) => (
        <div key={item.id}>
          { item.modified === true ? (
            <form key={item.id} onSubmit={(e) => saveEdit(e, item)}>
              <input
                type='text'
                name='text'
                value={editText}
                placeholder={item.text}
                onChange={onChange}
              />
            </form>
          ) : (
            <div key={item.id}>
              <li
                key={item.id}
                className={item.done === true ? 'completed' : ''}
              >
                {item.text}
              </li>
            </div>
          )}
          <ModifyTodo key={`modify_${item.id}`} id={item.id} />
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
