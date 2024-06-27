import { useState } from 'react'
import './App.css'
import Outline from './pages/Outline/Outline'
import Home from './pages/Home/Home'
import { Router, RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import About from './pages/AboutUs/About'
import Carrier from './pages/Carrier/Carrier'
import Admissions from './pages/Admissions/Admissions'
import Programs from './pages/Programs/Programs'
import Acedemic from './pages/Programs/Acedemic/Acedemic'
import Facilites from './pages/facilities/Facilites'
import Extracurricular from './pages/Programs/Extracarriculear/Extracurricular'
import Startup from './pages/Programs/StartupChallenge/Startup'
import StudentProjects from './pages/Programs/Projects/StudentProjects'
import PrincipalMessage from './Alone-Components/PrincipalMessage'
function App() {


  

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Outline />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/carrier' element={<Carrier />} />
        <Route path='/admission' element={<Admissions />} />
        <Route path='/admission' element={<Admissions />} />
        <Route path='/facalites' element={<Facilites />} />
        <Route path='principalmessage' element={<PrincipalMessage />} />
        <Route path='/programs' element={<Programs />}>

          <Route path='acedemic' element={<Acedemic />} />
          <Route path='extra' element={<Extracurricular />} />
          <Route path='startup' element={<Startup />} />
          <Route path='studentproject' element={<StudentProjects />} />
          <Route path='labs' element={<StudentProjects />} />
          
        </Route>


      </Route>
  
    )
  )
  return (
  
      <RouterProvider router={router} />
    
  
  )
}

export default App
