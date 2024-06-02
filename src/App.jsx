import { useState } from 'react'
import './App.css'
import Outline from './pages/Outline/Outline'
import Home from './pages/Home/Home'
import { Router, RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './pages/AboutUs/About'
import Carrier from './pages/Carrier/Carrier'
import Admissions from './pages/Admissions/Admissions'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outline />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/carrier' element={<Carrier />} />
        <Route path='/admission' element={<Admissions />} />
      </Route>
    )
  )
  return (
     <RouterProvider router={router}/>
  )
}

export default App
