import React from 'react'
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className="p-3 border-gray-200 rounded bg-transparent border-b-2 dark:bg-gray-200 dark:border-white">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <NavLink className="flex items-center">
                        <span className="self-center text-2xl capitalize font-monofont-semibold whitespace-nowrap text-white">Alen News</span>
                    </NavLink>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex flex-col md:items-center mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <NavLink to='/' className="block py-2 pl-3 pr-4  font-normal text-base  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink  to='/blog' className="block py-2 pl-3 pr-4  font-normal text-base  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-bindigo-600">blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to='/signup' className="block py-2 pl-3 pr-4  font-normal text-base  text-white bg-indigo-600  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">signup</NavLink>
                            </li>
                            <li>
                                <NavLink to='/signin' className="block py-2 pl-3 pr-4  font-normal text-base  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">signin</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header