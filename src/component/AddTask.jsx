import { nanoid } from "nanoid"
import { useState } from "react"
import { addUserTask } from "../features/tasks/taskSlice"
import { useDispatch } from "react-redux"

function AddTask() {
 const [taskData, setTaskData] = useState({
  taskTitle: "",
  taskCompletionDate: "",
  taskCompleted: false,
  taskId: "",
 });

 const dispatch = useDispatch();

 function handleCreateTask () {
  dispatch(addUserTask({...taskData, taskId: nanoid()}));

  setTaskData({
   taskTitle: "",
   taskCompletionDate: "",
   taskCompleted: "",
   taskId: "",
  });
 }
 return (
  <div className="flex flex-col w-[500px] gap-5">

   <input onChange={(e) => setTaskData({...taskData, taskTitle: e.target.value})} value={taskData.taskTitle} className="border p-4 rounded-md" type="text" placeholder="Enter Task Title" />

   <input className="border border-gray-200 p-4 rounded-md" value={taskData.taskCompletionDate} onChange={(e) => setTaskData({...taskData, taskCompletionDate: e.target.value})} type="datetime-local" />

   <button onClick={handleCreateTask} className="bg-gray-100 p-5 font-semibold text-gray-600 text-lg tracking-wide hover:bg-gray-500 hover:text-white rounded-md cursor-pointer">Save Task</button>
  </div>
 )
}

export default AddTask;