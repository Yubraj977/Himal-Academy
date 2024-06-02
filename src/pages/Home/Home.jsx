import React from 'react'
import himalb from '/himalb.jpeg'
import MySlider from './slider/MySlider'
import Nav from '../Outline/Nav'
import AboutHome from './AboutHome'
import HomeBlogs from './HomeBlogs'
function Home() {
 
  return (
    <div className=''>
      <MySlider />
      <AboutHome />
      <div className="lg:px-side px-mb_side flex justify-center flex-col items-center py-24 bg-cyan-700 w-full">
        <h1 className="text-white text-4xl text-center font-semibold">JOIN WITH US</h1>
        <p className="text-white text-xl mt-3 font-normal text-center">Join as fast as you can , Fast application will get greater advantages. </p>
        <div className="form-email w-full mt-3 flex  lg:w-[55%]">
          <button className='bg-red-600 hover:bg-red-900 w-full px-4 py-2 rounded-sm text-white font-semibold'>Apply Now</button>

        </div>
      </div>
     
        <HomeBlogs />
    

    </div>

  )
}

export default Home
