import "./TaskCard.css"
const TaskCard = (props)=>{
    return (
      <div className="border-4 border-slate-400 p-2 m-10">
        <h2>{props.title}</h2>
        
            <p>{props.task}: {props.dueDate}{props.completedAtDate}</p>
        
        <p>Assignee: {props.assigneeName}</p>
        
      </div>
    )
  }

  export default TaskCard