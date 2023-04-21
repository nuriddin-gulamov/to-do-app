import { createSlice } from '@reduxjs/toolkit';

// Slice
const todosSlice = createSlice({
  name: 'to-do-list',
  initialState: { list: [] },
  reducers: {
    // Add To-Do
    addToDo: (state, action) => {
      state.list = [action.payload.newToDo, ...state.list];
    },

    // Remove To-Do
    removeToDo: (state, action) => {
      state.list = state.list.filter(
        (todo) => todo.id !== action.payload.item.id
      );
    },
  },
});

export const addToDo = todosSlice.actions.addToDo;
export const removeToDo = todosSlice.actions.removeToDo;
export default todosSlice.reducer;
