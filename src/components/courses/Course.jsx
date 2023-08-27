import React from 'react'
import './Course.css'
import Meta from './meta.png'
import Duke from './duke.png'
import Stanford from './stanford.png'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Course() {
  return (
    <>  
        <div id = 'course-container' className = 'flex flex-col items-center bg-indigo-200'>
            <div className = 'text-5xl font-bold p-4 m-12'>More Course From Categories</div>
            <div className = 'flex m-5 p-5'>
              <div id = 'card-course' className = 'transition transform hover:scale-110 hover:shadow-2xl bg-blue-50 ring-4 ring-black rounded-3xl m-5 flex justify-center items-center flex-col shadow-2xl hover:'>
                <div className = 'font-extrabold text-xl'>Introduction to Linear Algebra</div>
                <div className = 'text-gray-400'>Over 312 Courses</div>
              </div>
              <div id = 'card-course' className = 'transition transform hover:scale-110 hover:shadow-2xl bg-blue-50 ring-4 ring-black rounded-3xl m-5 flex justify-center items-center flex-col shadow-2xl'>
                <div className = 'font-extrabold text-xl'>Physics 101: An introduction</div>
                <div className = 'text-gray-400'>Over 123 Courses</div>
              </div>
              <div id = 'card-course' className = 'transition transform hover:scale-110 hover:shadow-2xl bg-blue-50 ring-4 ring-black rounded-3xl m-5 flex justify-center items-center flex-col shadow-2xl'>
                <div className = 'font-extrabold text-xl'>Introduction to Seismology</div>
                <div className = 'text-gray-400'>Over 932 Courses</div>
              </div>
              <div id = 'card-course' className = 'transition transform hover:scale-110 hover:shadow-2xl bg-blue-50 ring-4 ring-black rounded-3xl m-5 flex justify-center items-center flex-col shadow-2xl'>
                <div className = 'font-extrabold text-xl'>Differential Equations</div>
                <div className = 'text-gray-400'>Over 234 Courses</div>
              </div>
              <a href = '#'>
              <div id = 'card-course' className = 'transition transform hover:scale-110 hover:shadow-2xl bg-blue-50 ring-4 ring-black rounded-3xl m-5 flex justify-center items-center flex-col shadow-2xl'>
                <div className = 'font-extrabold text-xl'>Intro to Quantum Physics</div>
                <div className = 'text-gray-400'>Over 900 Courses</div>
              </div>
              </a>
            </div>
        </div>
        <div id = 'course-container-2' className = 'p-10 shadow-2xl flex flex-col items-center'>
            <div className = 'flex flex-row'>
              <span className = 'text-6xl m-10 font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400 inline-block text-transparent bg-clip-text'>Featured Courses</span>
              <span className = 'm-12 font-extrabold text-indigo-300'>Our highest and most popular rated <br /> courses by users and instructors alike</span>
            </div>
            <div className = 'flex'>
              <button className = 'transition transform hover:scale-125 hover:bg-opacity-100 m-10 bg-gradient-to-r ring-4 ring-black items-center hover:text-white hover:shadow-2xl h-20 w-40 bg-indigo-200 rounded-xl font-bold text-xl'>General</button>
              <button className = 'transition transform hover:scale-125 hover:bg-opacity-100 m-10 bg-gradient-to-r ring-4 ring-black items-center hover:text-white hover:shadow-2xl bg-indigo-200 h-20 w-40 rounded-xl font-bold text-xl'>Features</button>
              <button className = 'transition transform hover:scale-125 hover:bg-opacity-100 m-10 bg-gradient-to-r ring-4 ring-black items-center hover:text-white hover:shadow-2xl bg-indigo-200 h-20 w-40 rounded-xl font-bold text-xl'>Verification</button>
              <button className = 'transition transform hover:scale-125 hover:bg-opacity-100 m-10 bg-gradient-to-r ring-4 ring-black items-center hover:text-white hover:shadow-2xl bg-indigo-200 h-20 w-40 rounded-xl font-bold text-xl'>Pro Market</button>
            </div>
            <div className = 'flex flex-row justify-center items-center'>
              <div className = 'm-10 transition font-black transform hover:scale-110 hover:bg-opacity-50 p-10 rounded-xl h-80 shadow-2xl ring-2 ring-black bg-gradient-to-r from-blue-200 to-purple-200'>
                  <img className = 'h-16' src = {Meta}/>
                  <div className = 'text-2xl font-bold'>Game Development:
                    With C++
                  </div>
                  <div className = 'py-6'>
                  Join our professionally approved instructors and learn <br /> about the framework in game construction using C++
                  </div>
                  <button className = 'ring-4 ring-black pl-8 pr-8 pt-2 pb-2 rounded-xl hover:bg-black hover:text-white'>Join</button>
              </div>
              <div className = 'm-10 transition font-black transform hover:scale-110 hover:bg-opacity-50 p-10 h-80 rounded-xl ring-2 shadow-2xl ring-black bg-gradient-to-r from-blue-200 to-purple-200'>
                  <img className = 'h-12' src = {Duke}/>
                  <div className = 'text-2xl font-bold'>Biomedical Engineering 101
                  </div>
                  <div className = 'py-6'>
                  Study life in its most authentic form diagrams <br /> and how medical technology is created
                  </div>
                  <button className = 'ring-4 ring-black pl-8 pr-8 pt-2 pb-2 rounded-xl hover:bg-black hover:text-white'>Join</button>
              </div>
              <div className = 'm-10 transition font-black transform hover:scale-110 hover:bg-opacity-50 p-10 h-80 rounded-xl shadow-2xl ring-2 ring-black bg-gradient-to-r from-blue-200 to-purple-200'>
                  <img className = 'h-12' src = {Stanford}/>
                  <div className = 'text-2xl font-bold'>Aeronautics and Astronautics
                  </div>
                  <div className = 'py-6'>
                  Witness models of recently declassified technology, <br />and learn the ins and outs of aerospace engineering
                  </div>
                  <Link to = "/dashboard"><button className = 'ring-4 ring-black pl-8 pr-8 pt-2 pb-2 rounded-xl hover:bg-black hover:text-white'>Join</button></Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default Course
