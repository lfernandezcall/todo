import { createAsyncThunk } from '@reduxjs/toolkit';

const handlingError = (res) => {
  if (!res.ok) {
    throw Error('FETCH ERROR', res.statusText);
  }
  return res;
};
const headers = {
  Accept: 'application/json',
};

const serverURL = 'http://localhost:5000';

const getAPI = fetch(serverURL, { headers })
  .then((res) => handlingError(res).json())
  .then((data) => {
    return data.todoItems;
  });

const updateTodoItems = (state) =>
  fetch(serverURL, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(state),
  }).then((res) => handlingError(res));

const getTodoItems = createAsyncThunk(
  'todoItems/getTodoItems',
  async () => await getAPI
);


export { getTodoItems, updateTodoItems };
