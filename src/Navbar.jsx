import React from 'react'
import {Link} from 'react-router-dom'
import"./App.css"
export default function Navbar() {
  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
<nav style={{position:"fixed",top:"0",width:"100%"}}className="bg-black border-gray-200 dark:bg-gray-900 ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 m">
      <a href="" className="flex items-center">
          
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
          <li>
            <Link to="/home" className="block py-2 pl-3 pr-4 text-blue-500 bg-purple-900 rounded md:bg-transparent md:text-purple-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
          </li>
          <li>
            <a href="" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="/asignaturas" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  md:hover:text-blue-500 md:dark:hover:bg-transparent">Asignaturas</a>
          </li>
          <li>
            <Link to="/examenes" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0  md:dark:hover:bg-transparent">Exámenes</Link>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0  md:dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
  <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </>
  )
}
