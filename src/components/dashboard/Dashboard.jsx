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
      <div id = 'dashboard-container-1' className = 'bg-gradient-to-r from-orange-200 to-orange-300'>
        <div id = 'dashboard-item-1' className = 'flex flex-col justify-top items-center rounded-3xl bg-gradient-to-r from-red-200 to-red-100'>
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
          <button onClick={handleButtonClickAgain} className = 'font-extrabold transform duration: 500 hover:scale-105 text-4xl m-5 p-5 hover:bg-red-200 hover:opacity-75 hover:shadow-lg rounded-2xl'>1 .Topic 1</button>
          <button onClick={handleButtonClick} className = 'font-extrabold transform duration: 500 hover:scale-105 text-4xl m-5 p-5 hover:bg-red-200 hover:opacity-75 hover:shadow-lg rounded-2xl'>1 .Topic 1</button>
          <button className = 'font-extrabold transform duration: 500 hover:scale-105 text-4xl m-5 p-5 hover:bg-red-200 hover:opacity-75 hover:shadow-lg rounded-2xl'> 1. Topic 1</button>
        </div>
        
        {showEvent ? <Topic1 /> : <Topic2 />}
      </div>
    </>
  )
}

export default Dashboard
