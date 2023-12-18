// HomePage.tsx
import React from 'react';
import Projects from '../Projects';


const HomePage: React.FC = () => {
  return (
    <div className=' mx-auto'>
      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
        <p className="text-lg text-gray-600  md:ml-0">Welcome to the Task Manager application!</p>
      </div>
      <div className='mt-2'>
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center md:w-1/3 w-4/3   justify-center">
              <h2 className="text-white text-lg font-bold">Projects</h2>
            </div>
            <div className="flex  gap-4 md:w-1/4 w-4/3">
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:px-4 px-1 md:rounded-full rounded '>
                <a href="">New Projects</a>
              </button>
            </div>

            
          </div>
          <div className='grid grid-cols-3  gap-2 mt-5'>
              <Projects />  
              <Projects />  
              <Projects />  
              <Projects />  
              <Projects />  
              <Projects />  

          </div>
        </div>
        

      </div>
    </div>
  );
};
export default HomePage;