import React from 'react'
import './Dashboard.css'
import Syllabus from './syl.png'
import { useState } from 'react';
import Topic1 from './topic1.jsx'
import Topic2 from './topic2.jsx'

function Dashboard() {
  const [showEvent, setShowEvent] = useState(false);
  
  const handleButtonClick = () => {
    setShowEvent(true);
  };

  const handleButtonClickAgain = () => {
    setShowEvent(false);
  };


  return (
    <>
      <div id = 'dashboard-container-1' className = 'bg-gradient-to-r from-blue-200 to-indigo-300'>
        <div id = 'dashboard-item-1' className = 'flex flex-col pl-5 pt-4 ring-4 ring-indigo-400 rounded-3xl bg-gray-400'>
          <div className = 'text-7xl font-extrabold'>Course 1</div>
          <div className = 'text-3xl font-bold '>BBC123</div>
        </div>
      </div>
      <div id = 'dashboard-container-2' className = 'flex flex-row justify-center items-center'>

        <div id = 'dashboard-item-2' className = 'bg-gray-200 rounded-2xl'>
          <div className = 'flex m-5 mt-8 underline'>
            <a><img className = 'mr-5 mt-1' src = {Syllabus}/></a>
            <div className = 'font-bold text-3xl'>Syllabus</div>
          </div>
          <button onClick={handleButtonClickAgain} className = 'font-extrabold transform duration: ml-10 500 hover:underline hover:scale-105 text-4xl p-5 hover:bg-indigo-200 hover:opacity-75 hover:shadow-lg rounded-2xl'>1 .Topic 1</button>
          <button onClick={handleButtonClick} className = 'font-extrabold transform duration: 500 ml-10 hover:underline hover:scale-105 text-4xl p-5 hover:bg-indigo-200 hover:opacity-75 hover:shadow-lg rounded-2xl'>1 .Topic 1</button>
          <button className = 'font-extrabold transform duration: 500 hover:scale-105 text-4xl hover:underline ml-10 p-5 hover:bg-indigo-200 hover:opacity-75 hover:shadow-lg rounded-2xl'> 1. Topic 1</button>
        </div>
        {showEvent ? <Topic2 /> : <Topic1 />}
      </div>
    </>
  )
}

export default Dashboard
