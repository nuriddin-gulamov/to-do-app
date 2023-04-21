import { configureStore } from '@reduxjs/toolkit';

// Reducer
import todosReducer from './todos';

// Store
export const store = configureStore({
  reducer: {
    toDoList: todosReducer,
  },
});
