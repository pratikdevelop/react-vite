import { useState } from 'react'
import './App.css'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Home from './Index'
import Signup from './Signup'
function App() {

  return (
    <>
      <div className="flex flex-col relative w-full">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
