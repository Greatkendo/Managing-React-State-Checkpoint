// Creating a slice of the Redux store for managing tasks
import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice ({
 name: "tasks", // Naming this part of the store as "tasks"
 initialState: {
  userTasks: JSON.parse(localStorage.getItem("myTask")) ?? [], // Loads saved tasks from local storage
 },

 reducers: {
  // Function to add a new task
  addUserTask: (state, action) => {
   state.userTasks = [action.payload, ...state.userTasks]; // Adds the new task to the list
   localStorage.setItem("myTask", JSON.stringify(state.userTasks)); // Saves tasks to local storage
  },

  // Function to update task completion status
  updateTaskStatus: (state, action) => {
   const updatedUserTasks = state.userTasks.map((item) => {
    if(item.taskId === action.payload) {
     item.taskComleted = !item.taskCompleted; // Toggles task completion 
    }
    return item;
   });
   state.userTasks = updatedUserTasks;
   localStorage.setItem("myTask", JSON.stringify(updatedUserTasks)); // Saves updated tasks
  },

  // Function to delete a task
  deleteUserTask: (state, action) => {
   const remainingTasks = state.userTasks.filter((item) => {
    item.taskId !== action.payload; // Removes the task with the matching ID
   });
   state.userTasks = remainingTasks;
   localStorage.setItem("myTask", JSON.stringify(remainingTasks));
  },

  // Function to edit a task
  editUserTask: (state, action) => {
   const { taskId, editedTask } = action.payload;
   state.userTasks = state.userTasks.map((item) =>
    item.taskId === taskId ? { ...item, editedTask } : item // Updates the task 
   );
   localStorage.setItem("myTask", JSON.stringify(state.userTasks));
  },
 },
});

// Exporting task actions so other parts of the app can use them
export const {addUserTask, updateTaskStatus, deleteUserTask, editUserTask} = taskSlice.actions;
export default taskSlice.reducer;