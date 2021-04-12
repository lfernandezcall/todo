import React from 'react';
import TodoList from './features/todo/TodoList';
import AddTodoForm from './features/todo/AddTodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
