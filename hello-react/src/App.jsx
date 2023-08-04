import { useState } from 'react'
import TaskCard from './TaskCard.jsx'
import "./TaskCard.css"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=' grid justify-center mt-4 ml-20 mr-20 font-sans '>
        <h2 className='font-bold text-2xl'> Smarter Tasks</h2>
        <h4 className=''> <span className='font-bold text-slate-400'> Project: </span> Graduation Final Year Project Revamp College Website</h4>
        <div className='flex justify-center gap-10 p-10'>
        <div className=' rounded-2xl border-4 w-96 '>
          <h1 className='text-xl text-center mt-4 font-bold text-slate-500'>Pending</h1>
          <TaskCard title="Build website" dueDate="10th April" assigneeName="Rohit" task="due Date" />
          <TaskCard title="Build website" dueDate="10th April" assigneeName="Rohit" task="due Date"/>
          <div className='bg-slate-200  m-10'>+ New Task</div>
        </div>
        <div className=' rounded-2xl border-4 w-96 '>
        <h1 className='text-xl text-center mt-4  font-bold text-slate-500'>Done</h1>
        <TaskCard title="Build website" completedAtDate="10th April" assigneeName="Rohit" task="Completed on" />
          <TaskCard title="Build website" completedAtDate="10th April" assigneeName="Rohit" task="Completed on" />
        </div>
      </div>
      </div>
  )
}




export default App
