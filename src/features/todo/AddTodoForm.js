import React, { useRef } from 'react'
import { Context } from '../../app/StateHandler'

const AddTodoForm = () => {
    const { dispatch } = Context();
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ text:  inputRef.current.value, type: 'add' })
        inputRef.current.value = '';
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Enter new task'
                />
                <button type='submit'>Add Todo</button>
            </form>
        </section>
    )
}

export default AddTodoForm