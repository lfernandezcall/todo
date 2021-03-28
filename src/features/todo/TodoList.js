import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todoItems = useSelector(state => state.todoItems)

    return (
        <ul>
            {todoItems.map(item => (
                <li key={item.id}>{item.text}</li>
            ))
            }
        </ul>
    )
}

export default TodoList