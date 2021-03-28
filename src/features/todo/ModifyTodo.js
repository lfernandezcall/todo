import React from 'react'
import { useDispatch } from 'react-redux'
import { todoModified } from './todoSlice'

const ModifyTodo = (props) => {
    const dispatch = useDispatch()
    const actionTypes = ['done', 'modified', 'deleted']

    return (
        <section>
            <button key={'done'} onClick={() => (
                dispatch(todoModified({ id: props.id, type: 'done' })
                ))
            }>✅</button>
            <button key={'modified'} onClick={() => (
                dispatch(todoModified({ id: props.id, type: 'modified' })
                ))
            }>🖊</button>
            <button key={'deleted'} onClick={() => (
                dispatch(todoModified({ id: props.id, type: 'deleted' })
                ))
            }>🗑</button>
        </section>
    )
}

export default ModifyTodo