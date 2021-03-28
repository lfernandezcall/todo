import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todoItems',
    initialState: JSON.parse(localStorage.getItem('todoItems')) || [],
    reducers: {
        todoAdded(state, action) {
            state.push(action.payload)
        }
    }

})

export const { todoAdded } = todoSlice.actions
export default todoSlice.reducer

