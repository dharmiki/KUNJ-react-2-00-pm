import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
      },
      prepare: (title) => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return {
          payload: {
            id: nanoid(),
            title,
            date,
            time,
            status: "pending",
          },
        };
      },
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.status = task.status === "pending" ? "completed" : "pending";
      }
    },
    updateTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.title = newTitle;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, updateTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
