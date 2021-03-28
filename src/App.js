import React, { Component } from 'react';
import TodoList from './features/todo/TodoList'
import AddTodoForm from './features/todo/AddTodoForm'
import './App.css';
class App extends Component {

  render(){
    return (
      <div className="App">
        <AddTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
