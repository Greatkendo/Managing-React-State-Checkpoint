import React from "react";
import AddTask from "./component/AddTask";
import ShowTask from "./component/showTask";


function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <AddTask />
      <ShowTask />
    </div>
  )
}

export default App;