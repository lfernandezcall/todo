// import { createSlice } from '@reduxjs/toolkit'

// const todoSlice = createSlice({
//     name: 'todoItems',
//     initialState: JSON.parse(localStorage.getItem('todoItems')) || [],
//     reducers: {
//         todoAdded(state, action) {
//             state.push(action.payload)
//         },
//         todoModified(state, action) {
//             return action.payload.type === 'deleted' ?
//                 (state.filter(item => item.id !== action.payload.id))
//                 :
//                 (state.map(item => (item.id === action.payload.id ? { ...item, [action.payload.type]: !item[action.payload.type] } : item)))
//         },
//         editItem(state, action) {
//             return state.map(item => (item.id === action.payload.id) ? { ...item, [action.payload.type]: action.payload.editText, modified: false } : item)

//         }
//     }
// })

// export const { todoAdded, todoModified, editItem } = todoSlice.actions
// export default todoSlice.reducer

