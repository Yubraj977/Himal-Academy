import React from 'react'
import lab3 from '/acedemic/acedemic1.jpeg'

function Acedemic() {
  return (
    <div className=' px-side'>
      <h1 className='font-bold text-red-500 text-2xl text-center'></h1>

      <h1 className="text-4xl font-bold xl:block hidden leading-tight text-red-900 text-center">
        Our Some academic Achievements
      
      </h1>
      <img src={lab3} alt="" className=' rounded-3xl mt-6' />
      <h1 className="text-3xl font-semibold xl:block hidden leading-tight text-gray-800 text-center font-playwrite">
        The team with above 3.70 GPA Score in SEE Exam.
      </h1>
    </div>
  )
}

export default Acedemic
