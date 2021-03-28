import React from 'react'
import { Context } from '../../app/StateHandler'

const TodoList = () => {
    const [state, dispatch] = Context();
    console.log('state', state)
    return (
        <ul>{state.map(item => (
            <div key={item.id}>
                <li key={item.id} className={item.done === true ? 'completed' : ''}>{item.text}</li>
            </div>
        ))}
        </ul>
    )
}

export default TodoList