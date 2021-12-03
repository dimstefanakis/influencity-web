/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const accountTypeSlice = createSlice({
  name: 'accountType',
  initialState: { type: 'mentee' },
  reducers: {
    changeType(state, action) {
      state.type = action.payload;
    },
    toggleType(state, action) {
      state.type = state.type === 'mentee' ? 'mentor' : 'mentee';
    },
  },
});

export const { changeType } = accountTypeSlice.actions;

export default accountTypeSlice;
