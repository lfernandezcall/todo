import React from 'react'
import { Context } from '../../app/StateHandler'
import ModifyTodo from './ModifyTodo'

const TodoList = () => {
    const { state } = Context();

    return (
        <ul>{state.map(item => (
            item.modified === true ?
            (<p key={'modify'}>Wants to modify???</p>)
            :
            (<div>
                <li key={item.id} className={item.done === true ? 'completed' : ''}>{item.text}</li>
                <ModifyTodo id={item.id} />
            </div>)
        ))}
        </ul>
    )
}

export default TodoList