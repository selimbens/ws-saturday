import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  addToList: (state, action) => {
    const id = state.length;
    const isDone = false;
    const description = action.payload;
    state.push(action.payload);
  },
});

export default todoSlice.reducer;
