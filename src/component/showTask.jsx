import { useDispatch, useSelector } from "react-redux";
import { deleteUserTask, editUserTask, updateTaskStatus } from "../features/tasks/taskSlice";

function ShowTask () {
 const { userTasks } = useSelector((state) => state.tasks);

 const handleEditTask = (task) => {
  // const editedTask = {...task, taskTitle:prompt("Edit task title:", task.taskTitle) || task.taskTitle};
  const editedTask = prompt("Edit task title", task.taskTitle);
  if(editedTask && editedTask.trim() !== ""){
   dispatch(editUserTask({taskId: task.taskId, updatedTask: {taskTitle: editedTask}}))
  }
 };

 const dispatch = useDispatch();

 return(
  <div>
   {
    userTasks.map((item) => {
     return(
      <div key={item.taskId} className={`border-b w-[500px] p-4 ${item.taskCompleted === true && "text-green-600"}`}>

       <input type="checkbox" onChange={() => dispatch(updateTaskStatus(item.taskId))} />

       <div className="flex justify-between">
         <h3>{item.taskTitle}</h3>

         <button className="bg-green-300 py-2 px-5 rounded-md font-semibold text-gray-500 font-mono" onClick={() => handleEditTask(item)}>Edit Task</button>
       </div>
      
       <p className="text-gray-500 text-sm">{item.taskCompletionDate}</p>

       <button onClick={() => dispatch(deleteUserTask(item.taskId))} className="text-sm bg-red-700 w-full rounded-md text-white mt-2 font-semibold cursor-pointer p-3 animate-pulse">Delete Task</button>

      </div>
     )
    })
   }
  </div>
 )
}

export default ShowTask;