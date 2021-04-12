import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { todoAdded } from './todoSlice';
import { useSelector } from 'react-redux';
import { updateTodoItems } from '../../services';

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onChange = (e) => setText(e.target.value);
  const todoItems = useSelector((state) => state.todoItems);
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(
      todoAdded({
        id: nanoid(),
        text,
        done: false,
        modified: false,
        editText: ''
      })
    );
    setText('');
  };

  useEffect(() => {
    updateTodoItems(todoItems);
  });

  return (
    <section className="add-todo-form">
      <form onSubmit={addTodo}>
        <input type="text" name="text" value={text} onChange={onChange} />
        <button>✚</button>
      </form>
    </section>
  );
};

export default AddTodoForm;
