import { createSlice } from '@reduxjs/toolkit';
import { getTodoItems } from '../../services';

const todoSlice = createSlice({
  name: 'todoItems',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    todoModified(state, action) {
      return action.payload.type === 'deleted'
        ? state.filter((item) => item.id !== action.payload.id)
        : state.map((item) =>
            item.id === action.payload.id
              ? { ...item, [action.payload.type]: !item[action.payload.type] }
              : item
          );
    },
    editItem(state, action) {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              [action.payload.type]: action.payload.editText,
              modified: false,
            }
          : item
      );
    }
  },
  extraReducers: {
    [getTodoItems.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getTodoItems.rejected]: (state, action) => {
      console.log('Check your server connection!');
    },
  },
});

export const { todoAdded, todoModified, editItem } = todoSlice.actions;
export default todoSlice.reducer;
