import React, { useRef } from 'react'
import { Context } from '../../app/StateHandler'
import ModifyTodo from './ModifyTodo'

const TodoList = () => {
    const { state, dispatch } = Context();
    const inputRef = useRef();
    const saveEdit = (e, item) => {
        e.preventDefault()
        dispatch({ id: item.id, type: 'editItem', editText: inputRef.current.value })
    }

    return (
        <ul>{state.map(item => (item.modified === true ?
            (<form key={item.id} onSubmit={(e) => saveEdit(e, item)}>
                <input
                    key={item.id}
                    ref={inputRef}
                    type='text'
                    placeholder={item.text}
                />
            </form>)
            :
            (<div key={item.id}>
                <li key={item.id} className={item.done === true ? 'completed' : ''}>{item.text}</li>
                <ModifyTodo id={item.id} />
            </div>)
        ))}
        </ul>
    )
}

export default TodoList