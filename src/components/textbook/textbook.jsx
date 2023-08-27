import React from 'react'
import './textbook.css'
import Reload from './reload.png'
import Information from '../information/Information.jsx'
import Assistant from './assistant.jpg'

function Textbook() {
  return (
    <div>
        <nav id = 'navbar' className = 'flex shadow-2xl rounded-b-xl'>
            <div className = 'flex'>
              <div id = 'logo-navbar-item' className = 'ml-10 h-10 mt-9 w-20 flex justify-center items-center text-2xl font-bold ring-4 ring-black rounded-lg'>
                <a href = '#'>Course</a>
              </div>
              <a href = '#'><div className = 'mt-7 ml-3 text-2xl font-bold'>desk</div></a>
            </div>
            <div className = 'flex m-6 ml-80'>
              <a href = '#'><div className = 'mx-10 text-xl text-gray-600 font-extrabold hover:text-indigo-400'>AR Technology</div></a>
              <a href = '#'><div className = 'mx-10 text-xl text-gray-600 font-extrabold hover:text-indigo-400'>Courses</div></a>
              <a href = '#'><div className = 'mx-10 text-xl text-gray-600 font-extrabold hover:text-indigo-400'>About</div></a>
              <a href = '#'><div className = 'mx-10 text-xl text-gray-600 font-extrabold hover:text-indigo-400'>Contact</div></a>
            </div>
            <div className = 'flex items-center'>
              <a href = '#'><div className = 'text-gray-600 font-extrabold p-3 hover:text-indigo-400'>Login</div></a>
              <a href = '#'><div className = 'text-gray-600 font-extrabold ring-4 ring-black rounded-lg p-3 hover:text-white hover:bg-black'>Signup</div></a>
            </div>
        </nav>
        <div id = 'textbook-container-1' className = 'bg-gradient-to-r from-blue-100 to-indigo-300'>
            <div id = 'textbook-container-items' className = 'bg-indigo-400 rounded-2xl'>
                <div className = 'text-4xl font-bold px-10 pt-10'>Course 1 - Section 2.3</div>
                <div className = 'flex mt-2 mx-10'>
                    <img className = 'w-8 h-8' src = {Reload} />
                    <div className = 'mt-2 mx-3'>back to syllabus</div>
                </div>
                <div id = 'white-cover' className = 'bg-white rounded-2xl'></div>
            </div>
        </div>

        <div className = 'flex'>
            <div id = 'textbook-items-1' className = 'bg-gray-300 m-10 rounded-2xl'>
            </div>
            <div id = 'textbook-items-2' className = 'bg-gray-300 m-10 rounded-2xl'>
                <div id = 'textbook-items-3' className = 'bg-gradient-to-r p-5 from-indigo-400 to-blue-400 rounded-t-2xl'>
                    <div className = 'font-bold text-4xl'>Chat With</div>
                    <div className = 'font-lg text-3xl'>Your AI Assistant</div>
                    <img className = 'relative l-20 rounded-2xl h-32 w-24' src = {Assistant}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Textbook