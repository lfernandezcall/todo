import React, { useReducer, useContext, createContext } from "react";
const TodoContext = createContext({
  id: '',
  text: ''
});

const initialState = JSON.parse(localStorage.getItem('todoItems')) || [];

const Handlers = (state, action) => {
  const id = Math.random().toString(36).substr(2, 9);
  
  return [...state, { id: id, text: action.text }];
}

const Context = () => useContext(TodoContext);

const CustomProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(Handlers, initialState);
  
  localStorage.setItem('todoItems', JSON.stringify(state))

  return <TodoContext.Provider value={[state, dispatch]} {...props} />;
}

export { CustomProvider, Context };
