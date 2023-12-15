import React, {  } from "react";
import Task from "./Task";
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
interface Props {
  tasks: TaskItem[];
}



const TaskList = (props: Props)=>{
  const [taskAppState, setTaskAppState] = useLocalStorage<Props>("tasks", {
    tasks: [],
  });
  //const [propsx, setPropsx] = useState(props);
  console.log(taskAppState)
  const deleteTask = (e: React.FormEvent<HTMLFormElement>, id: number) =>{
    e.preventDefault();

  //  localStorage.removeItem()
    props.tasks.splice(id,1);
    //console.log(props.tasks);
    setTaskAppState({tasks: props.tasks});
    //setPropsx(props);
    //console.log(taskAppState);
  }
  
  return(

    props.tasks.map((task, idx) => (
      <form onSubmit={(event)=>deleteTask(event,idx)} >
        
      <Task key={idx} title={task.title} description={task.description} dueDate={task.dueDate} />
      <button type="submit" className="bg-red-500 rounded m-5 deleteTaskButton"   >Delete</button>
      </form>
    ))
  )
}


export default TaskList;