import React, { useReducer, useContext, createContext } from "react";
const TodoContext = createContext({
  id: '',
  text: ''
});

const handlers = (state, action) => {
  const id = Math.random().toString(36).substr(2, 9);
  return [ ...state,{ id: id, text: action.text }];
}

const Context = () => useContext(TodoContext);

const CustomProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(handlers, []);
  return <TodoContext.Provider value={[state, dispatch]} {...props} />;
}

export { CustomProvider, Context };
