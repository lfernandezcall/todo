import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from  '@reduxjs/toolkit'
import { todoAdded } from './todoSlice'

const AddTodoForm = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const onChange = e => setText(e.target.value)
    const addTodo = (e) => {
        e.preventDefault()
        
        text && dispatch(
            todoAdded({
                id: nanoid(),
                text
            })
        )

        setText('')
    }

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