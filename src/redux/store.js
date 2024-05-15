import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './todoSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
