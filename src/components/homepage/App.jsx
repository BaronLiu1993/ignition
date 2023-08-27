import { useState } from 'react'
import './App.css'
import Arrow from './arrow.png'
import Glasses from './glasses.png'
import Book from './book.png'
import Gear from './gear.png'
import Teacher from './teacher.png'
import Arr from './ARR.png'


function App() {
  return (
    <>
      <div id = 'homepage-container-1' className = 'bg-gradient-to-r from-blue-200 to-indigo-200 shadow-2xl'>
        <nav id = 'navbar' className = 'flex shadow-2xl rounded-b-xl'>
            <div className = 'flex'>
              <div id = 'logo-navbar-item' className = 'w-36 h-12 ml-10 mt-6 flex items-center text-2xl font-bold ring-2 ring-black rounded-lg'>
                <a href = '#'>ARcademy</a>
              </div>
              <img src = {Arr} className = 'h-16 w-16 ml-6 m-4'/>
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
      <div className = 'flex justify-center items-center'>
      <div className = 'flex mr-28 p-20 flex-col'>
          <div className = 'text-8xl mt-20 font-extrabold'>
            Update your skills <br /> without limits
          </div>
          <div className = 'mt-16 text-2xl font-medium'>
          Join the world’s fastest growing educational AR resource <br />and immerse yourself in learning
          </div>
          <button id = 'button-1' className = 'h-16 w-48 rounded-lg hover:shadow-2xl hover:bg-white hover:text-indigo-400 text-xl font-extrabold text-white mt-16' href = '#'>Explore Courses</button>
          <div className = 'flex flex-row'>
            <div className = 'mt-10 mr-24'>
              <div className = 'font-bold text-4xl'>320 K</div>
              <div className = 'font-bold'>Students</div>
            </div>
            <div className = 'mt-10 mr-24'>
              <div className = 'font-bold text-4xl'>100 %</div>
              <div className = 'font-bold'>Positive Review</div>
            </div>
            <div className = 'mt-10 mr-24'>
              <div className = 'font-bold text-4xl'>980</div>
              <div className = 'font-bold'>Companies</div>
            </div>
          </div>
          <div className = 'font-bold text-gray-900 text-xl mt-8 mr-24'>
                Learn from more than 160 member universities
          </div>
          <div id = 'arrow' className = 'flex m-5 animate-bounce duration:500'>
            <a href ='#'><img className = 'h-10' src = {Arrow}/></a>
          </div>
        </div>
        <img id = 'homepage-icon-glasses' src = {Glasses}/>
      </div>
      </div>

      <div id = 'homepage-container-2' className = 'bg-gray-800 shadow-2xl'> 
        <div className = 'flex justify-center p-10 shadow-2xl'>
          <div className = 'flex'>
            <div id = 'homepage-icon' className = 'm-5 bg-white rounded-lg'>
              <img src = {Book}/>
            </div>
            <div>
              <div className = 'text-white m-5 font-bold text-2xl'>More Than 1000+ Courses</div>
              <div className = 'text-white mt-8'>Suitable for all skill levels< br/> and desired occupations</div>
            </div>
          </div>
          <div className = 'flex'>
            <div id = 'homepage-icon' className = 'm-5 bg-white rounded-lg'>
              <img src = {Gear}/>
            </div>
            <div>
              <div className = 'text-white m-5 font-bold text-2xl'>Interactive Learning Modules</div>
              <div className = 'text-white mt-8'>Partnered with OpenAI and AI assistance <br />to provide you with immediate feedback</div>
            </div>
          </div>
          <div className = 'flex'>
            <div id = 'homepage-icon' className = 'm-5 bg-white rounded-lg'>
              <img src = {Teacher}/>
            </div>
            <div>
              <div className = 'text-white m-5 font-bold text-2xl'>World Class Instructors</div>
              <div className = 'text-white'>Professors from the world's <br /> most prestigious institutions</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
