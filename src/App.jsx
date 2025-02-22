import React from "react";
import AddTask from "./component/AddTask";
import ShowTask from "./component/showTask";

// This is the main app component. It combines both AddTask and ShowTask components.
function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center"> 
      {/* Displays the form to add a new task */}
      <AddTask /> 
      {/* Displays the list of tasks */}
      <ShowTask /> 
    </div>
  )
}

export default App; 