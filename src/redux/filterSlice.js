import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: {
    all: 'all',
    active: 'active',
    completed: 'completed',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  selectors: {
    selectFilters: state => state.status.all,
  },
  reducers: {
    setStatusFilter(state, action) {},
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setStatusFilter } = filtersSlice.actions;
export const { selectFilters } = filtersSlice.selectors;
