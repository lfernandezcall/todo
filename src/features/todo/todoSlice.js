import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', text: 'Drink coffe'},
    { id: '2', text: 'Take a nap'}
]

const todoSlice = createSlice({
    name: 'todoItems',
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { todoAdded } = todoSlice.actions
export default todoSlice.reducer

