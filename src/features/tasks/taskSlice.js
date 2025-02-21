import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice ({
 name: "tasks",
 initialState: {
  userTasks: JSON.parse(localStorage.getItem("myTask")) ?? [],
 },

 reducers: {
  addUserTask: (state, action) => {
   state.userTasks = [action.payload, ...state.userTasks];

   localStorage.setItem("myTask", JSON.stringify(state.userTasks))
  },

  updateTaskStatus: (state, action) => {
   const updatedUserTasks = state.userTasks.map((item) => {
    if(item.taskId === action.payload) {
     item.taskComleted === !item.taskCompleted;
    }
    return item;
   });
   state.userTasks = updatedUserTasks

   localStorage.setItem("myTask", JSON.stringify(updatedUserTasks))
  },

  deleteUserTask: (state, action) => {
   const remainingTasks = state.userTasks.filter((item) => {
    item.taskId !== action.payload
   })
   state.userTasks = remainingTasks

   localStorage.setItem("myTask", JSON.stringify(remainingTasks))
  },

  editUserTask: (state, action) => {
   const { taskId, editedTask } = action.payload;

   const taskToEdit = state.userTasks.map((item) => 
    item.taskId === taskId ? { ...item, editedTask } : item )
   state.userTasks = taskToEdit

   localStorage.setItem("myTask", JSON.stringify(taskToEdit))
  },
 },
});

export const {addUserTask, updateTaskStatus, deleteUserTask, editUserTask} = taskSlice.actions

export default taskSlice.reducer;

