import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  selectors: {
    selectTasks: state => state.tasks,
  },
  reducers: {
    addTask: {
      reducer(state, { payload }) {
        state.tasks.push(payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, { payload }) {
      state.tasks = state.tasks.filter(task => task.id !== payload);
    },
  },
  toggleCompleted(state, action) {},
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const { selectTasks } = tasksSlice.selectors;
