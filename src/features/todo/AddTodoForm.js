import React, { useRef } from 'react'
import { Context } from '../../app/StateHandler'

const AddTodoForm = () => {
    const [_, dispatch] = Context();
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ text:  inputRef.current.value })
        inputRef.current.value = '';
    }

    // useEffect(() => {
    //     localStorage.setItem('todoItems', JSON.stringify(todoItems))
    // })

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