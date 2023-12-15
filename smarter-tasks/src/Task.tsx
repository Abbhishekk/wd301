import "./TaskCard.css";
interface TaskProp {
  key: number;
  title: string;
  description: string;
  dueDate: string;
}


const Task = (props: TaskProp) =>{
  
  return (
    <div className="TaskItem shadow-md border border-slate-100" >
      
      
              <h2 className="text-base font-bold my-1">{props.title}</h2>
              <p className="text-sm text-slate-500">
                <b> Due Date:</b> {props.dueDate}
              </p>
              <p className="text-sm text-slate-500">
              <b> Description:</b> {props.description}
              </p>
              
         
      </div>
  )
}


export default Task;