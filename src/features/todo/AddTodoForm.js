import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { todoAdded } from './todoSlice'
import { useSelector } from 'react-redux'

const AddTodoForm = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const onChange = e => setText(e.target.value)
    const todoItems = useSelector(state => state.todoItems)
    const addTodo = (e) => {
        e.preventDefault()

        text && dispatch(
            todoAdded({
                id: nanoid(),
                text,
                done: false,
                modified: false,
                editText: ''
            })
        )

        setText('')
    }

    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(todoItems))
    })

    return (
        <section>
            <form onSubmit={addTodo}>
                <input
                    type='text'
                    name='text'
                    value={text}
                    onChange={onChange}
                />
                <button>Add Todo</button>
            </form>
        </section>
    )
}

export default AddTodoForm