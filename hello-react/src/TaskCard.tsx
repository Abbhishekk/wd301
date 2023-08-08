import React from "react"
import "./TaskCard.css"
const TaskCard = (props)=>{
    return (
      <div className="border-4 border-slate-400 p-2 m-10">
        <h2>{props.title}</h2>
        
            {props.dueDate ? (
            <p>Due on: {props.dueDate}</p>
          ) : (
            <p>Completed on: {props.completedAtDate}</p>
          )}
        <p>Assignee: {props.assigneeName}</p>
        
      </div>
    )
  }

  export default TaskCard