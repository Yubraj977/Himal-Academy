import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import we1 from '/we1.png'
import school3 from '/school/school3.jpeg'
import school4 from '/school/image.jpg'
import slide1 from '/slides/slide1.jpeg'
import slide2 from '/slides/slide2.jpg'

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./style.css";
import { FaAngleRight } from "react-icons/fa";

const content = [
  {
    title: "Frienldy Environment",
    description:"n the heart of our school lies a vibrant community where kindness reigns supreme and every individual is embraced with open arms. From the bustling classrooms to the serene corners of our campus, a spirit of camaraderie thrives, weaving a tapestry of friendship that knows no bounds.",
    image:school4,
    user: "Luan Gjokaj",
    userProfile: we1,
    button:'Know More'
  },
  {
    title: "Academic Excellence",
    description:
      "With dedicated teachers and innovative programs, our school cultivates a culture of academic excellence, empowering students to reach their full potential.",
    button: "Apply Now",
    image:slide2,
    // image: "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Community Engagement",
    description:
      "Our school actively engages with the local community, fostering partnerships and initiatives that enrich the educational experience and promote social responsibility.",
    button: "Join now",
    // image:slide1,
    image: "https://images.unsplash.com/photo-1620003048292-c4db88559488?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

function MySlider() {
  return (
    <div className="slide-container pt-top ">
     
    <Slider className="slider-wrapper"  autoplay='1400' infinite={true} previousButton={<FaAngleRight className='text-4xl text-white mb-40'/>} nextButton={<FaAngleRight className='text-4xl text-white'/>} >
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content "
          style={{ background: `url('${item.image}') no-repeat center center ` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p className='font-lato text-4xl font-bold  '>{item.description}</p>
            <button className='bg-red-900  font-bold  text-white px-4 py-2 rounded-sm hover:bg-white hover:text-red-900'>{item.button}</button>
          </div>
        
        </div>
      ))}
    </Slider>
  </div>
  

  )
}

export default MySlider
