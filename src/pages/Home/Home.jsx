import React from 'react'
import himalb from '/himalb.jpeg'
import MySlider from './slider/MySlider'
import Nav from '../Outline/Nav'
import AboutHome from './AboutHome'
import HomeBlogs from './HomeBlogs'
import HomeTabs from './HomeTabs'
import { useEffect } from 'react'
import Objectives from '../../Alone-Components/Objectives'
function Home() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div className=''>
      <MySlider />
      <AboutHome />
        <HomeTabs />
       
        <HomeBlogs />
      

    

    </div>

  )
}

export default Home
