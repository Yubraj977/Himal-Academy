import React from 'react'
import himalb from '/himalb.jpeg'
import MySlider from './slider/MySlider'
import Nav from '../Outline/Nav'
import AboutHome from './AboutHome'
import HomeBlogs from './HomeBlogs'
import HomeTabs from './HomeTabs'
function Home() {
 
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
