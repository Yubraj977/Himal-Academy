import React,{useEffect} from 'react'
import SchoolLife from './SchoolLife'
import AboutSchool from './AboutSchool'
function About() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' px-mside lg:px-side flex flex-col'>
      <AboutSchool/>
      {/* <SchoolLife/> */}
      
    </div>
  )
}

export default About
