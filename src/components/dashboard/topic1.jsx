import React from 'react'
import './Dashboard.css'

function Topic1() {
  return (
    <div>
        <div id = 'dashboard-item-3' className = 'bg-gray-200 m-10 rounded-2xl'>
            <div className = 'text-5xl font-bold py-10 pl-36'>1. Topic 1</div>
            <div id = 'divider-1' className = 'h-1 bg-black ml-36'></div>
            <a href = '#'><div className = 'mt-5 ml-56 font-lg text-4xl p-5 hover:underline hover:bg-white rounded-xl transform hover:scale-105 duration:700'>1.1 Section 1</div></a>
            <a href = '#'><div className = 'ml-56 font-lg text-4xl p-5 hover:underline hover:bg-white rounded-xl transform hover:scale-105 duration:700'>1.2 Section 2</div></a>
            <a href = '#'><div className = 'ml-56 font-lg text-4xl p-5 hover:underline hover:bg-white rounded-xl transform hover:scale-105 duration:700'>1.3 Section 3</div></a>
            <a href = '#'><div className = 'ml-56 font-lg text-4xl p-5 hover:underline hover:bg-white rounded-xl transform hover:scale-105 duration:700'>1.4 Section 4</div></a>
            <a href = '#'><div className = 'ml-56 font-lg text-4xl p-5 hover:underline hover:bg-white rounded-xl transform hover:scale-105 duration:700'>1.5 Section 5</div></a>
        </div>
    </div>
  )
}

export default Topic1
