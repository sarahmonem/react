import { nanoid } from "nanoid";
import TaskForm from "./TaskForm";
import Tasklists from "./Tasklists";
import { useState } from 'react';

function App() {
  const Data = [
    { id: 1, Taskname: "task1", stateDone: false },
    { id: 2, Taskname: "task2", stateDone: false }

  ]
  const [Tasks, setTasks] = useState(Data);


  function addtask(taskname) {
    if(taskname !== null){
      const newtask = Tasks.concat({ id: "task-" + nanoid(), Taskname: taskname, stateDone: false});

      setTasks(newtask);
    }
    else {
      return ;
    }
  

  }
  function removetask(id) {
    const newlist = Tasks.filter((task) => task.id !== id);
    setTasks(newlist)
  }
  

const newtasklist = Tasks.map(
  item => (
    <Tasklists 
  taskname={item.Taskname}
  key={item.id}
  state={item.stateDone}
  removetask={removetask}
  id={item.id}
    />
  )
 
)


  return (
    <div className="App">
      <header className="container mt-5">
      <div className="todo">
        <TaskForm
          addtask={addtask}


        />
        <div className="tasklist ">
        <ul>
        {newtasklist}

        </ul>
            
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
