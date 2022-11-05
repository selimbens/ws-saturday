import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToList: (state, action) => {
      const id = state.tasks.length
        ? state.tasks.map((task) => task.id).reduce((a, b) => Math.max(a, b)) + 1
        : state.tasks.length;
      const isDone = false;
      const description = action.payload;
      const taskObject = { id, isDone, description };
      state.tasks.push(taskObject);
    },
    markAsDone: (state, action) => {
      const {id, isDone} = action.payload;
      const description = state.tasks.find(task => task.id === id).description
      const posArray = state.tasks.map( task => task.id );
      const taskObject = { id, isDone: !isDone, description };
      const position = posArray.indexOf( id );

      state.tasks.splice( position , 1 , taskObject )

    }
  },
});

export const { addToList, filterList, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
