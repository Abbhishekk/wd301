import "./TaskCard.css"
const TaskCard = (props)=>{
    return (
      <div className="border-4 border-slate-400 p-2 m-10">
        <h2>{props.title}</h2>
        <p>{props.task}: {props.due}</p>
        <p>Assignee: {props.assignee}</p>
        
      </div>
    )
  }

  export default TaskCard