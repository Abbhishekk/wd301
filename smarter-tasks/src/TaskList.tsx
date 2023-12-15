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
  const deleteTask = (item: TaskItem) =>{
    

  //  localStorage.removeItem()
    props.tasks.splice(item.id-1,1);
    //console.log(props.tasks);
    props.tasks.map((task, idx)=>{
      task.id = idx;
    })
    setTaskAppState({tasks: props.tasks});
    //setPropsx(props);
    //console.log(taskAppState);
  }
  
  return(

    props.tasks.map((task, idx) => (
      
        
      <><Task item={({ id: task.id, title: task.title, description: task.description, dueDate: task.dueDate })} removeTask={deleteTask} /><button type="submit" className="bg-red-500 rounded m-5 deleteTaskButton">Delete</button></>
     
    ))
  )
}


export default TaskList;


