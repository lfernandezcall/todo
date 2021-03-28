import React from 'react'
import { Context } from '../../app/StateHandler'

const ModifyTodo = (props) => {
    const { dispatch } = Context();

    return (
        <section>
            <button key={'done'} onClick={() => (
                dispatch({ id: props.id, type: 'done' }))
            }>✅</button>
            <button key={'modified'} onClick={() => (
                dispatch({ id: props.id, type: 'modified' }
                ))
            }>🖊</button>
            <button key={'deleted'} onClick={() => (
                dispatch({ id: props.id, type: 'deleted' }
                ))
            }>🗑</button>
        </section>
    )
}

export default ModifyTodo