import React, { useReducer, useContext, createContext } from "react";

const TodoContext = createContext({
    id: '',
    text: '',
    done: false,
    modified: false
});

const initialState = JSON.parse(localStorage.getItem('todoItems')) || [];

const Handlers = (state, action) => {
    const id = Math.random().toString(36).substr(2, 9);
    const mapping = {
        add: [...state, { id: id, text: action.text }],
        deleted: state.filter(item => (item.id !== action.id)),
        done: state.map(item => (item.id === action.id ? { ...item, done: !item.done } : item)),
        modified: state.map(item => (item.id === action.id ? { ...item, modified: true } : item)),
        editItem: state.map(item => (item.id === action.id ? { ...item, text: action.editText, modified: false } : item))
    }

    return mapping[action.type] || state
}

const Context = () => useContext(TodoContext)

const CustomProvider = ({ ...props }) => {
    const [state, dispatch] = useReducer(Handlers, initialState);
    localStorage.setItem('todoItems', JSON.stringify(state))

    return <TodoContext.Provider value={{ state, dispatch }} {...props} />
}

export { CustomProvider, Context };
