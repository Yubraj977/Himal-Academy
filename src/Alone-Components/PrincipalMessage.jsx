import React from 'react'
import { useEffect } from 'react';
import madhu from '/madhu.jpg'
function PrincipalMessage() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col pt-32 items-center'>
      <h1 className='font-playwrite text-4xl  font-bold text-second underline'>Principal's Message</h1>
      <div className="mt-top lg:px-32 flex px-4 gap-10 lg:flex-row flex-col">
        <div className="left lg:w-1/2">
            <img src={madhu} alt="" />
        </div>
        <div className="right lg:w-1/2">
          <h1 className='font-semibold fong-lg'>Dear Student's</h1>
          <p className='mt-4 font-lato text-lg'>I feel pleased to welcome you at Himal Academy Dang. Our mission is to eastablish H.A as a world class learning center, to inculcate positive attitudes,
            skills, ability and value-based knowledge in students to compete sucessfully in their disciplines. Himal Academy Dang is known as synergy of intellectuals and academicans working in innovative field of teaching and learning. 
            Realizing schools are not only centers of learning but also initiators or nourishing student's personality, we focus on both educational and holistic
            development.We promise our students a happy and futuristic learning ambience at Himal Academy Dang.
          </p>
          <p className='mt-4 font-bold text-right'>
          <h2>Madhu Sudhan K.C</h2>
          <h2>principal</h2>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrincipalMessage
