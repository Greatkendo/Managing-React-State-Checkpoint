// Setting up the Redux store (a big storage for tasks)
import { configureStore } from "@reduxjs/toolkit";
import taskReducer  from "./features/tasks/taskSlice";

// This store keeps track of all tasks
export default configureStore({
  reducer: {
   tasks: taskReducer, // The tasks are managed by taskReducer
  }
});