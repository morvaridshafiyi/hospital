import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    floorsNo:0
  },
  reducers: {
    floorsNoSetter: (state, action) => {
   state.floorsNo = action.payload
  },
}
});

// this is for dispatch
export const { floorsNoSetter } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;