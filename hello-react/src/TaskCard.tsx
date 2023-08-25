import React from "react";

const TaskCard = ({ title, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="border-2 border-slate-300 rounded-xs p-2 mb-2">
      <h3 className="font-bold text-slate-600 mb-2">{title}</h3>
      {dueDate ? (
        <p>Due on: {dueDate}</p>
      ) : (
        <p>Completed on: {completedAtDate}</p>
      )}
      <p>Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;