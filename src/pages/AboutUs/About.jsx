import React,{useEffect} from 'react'
import SchoolLife from './SchoolLife'
import AboutSchool from './AboutSchool'
import Objectives from '../../Alone-Components/Objectives';
function About() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' px-mside lg:px-side flex flex-col'>
      <AboutSchool/>
      {/* <SchoolLife/> */}
      <Objectives />
    </div>
  )
}

export default About
