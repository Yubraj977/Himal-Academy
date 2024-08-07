import React from 'react'
import lab3 from '/acedemic/acedemic1.jpeg'
import program1 from '/programs/program1.jpeg'
import program2 from '/programs/program2.jpeg'

function StudentProjects() {
  return (
    <div className=' px-side  '>

      <h1 className="text-4xl font-bold xl:block hidden leading-tight text-red-900 text-center">
        Our Some Programs Memories
      </h1>

      <div className='flex flex-col items-center'>
        <img src={program1} alt="" className=' rounded-3xl mt-6' />
        <h1 className="text-2xl font-semibold xl:block hidden leading-tight text-gray-800 text-center font-inter mt-2">
          Token of Love to the Key Note Speaker , Asst. Secretary of PABSON DANG on Orientation Programme.
        </h1>
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100" />
      <div>
        <img src={program2} alt="" className=' rounded-3xl mt-6' />
        <h1 className="text-2xl font-semibold xl:block hidden leading-tight text-gray-800 text-center font-inter mt-2">
          Token of Love to the Key Note Speaker , Asst. Secretary of PABSON DANG on Orientation Programme.
        </h1>
      </div>



    </div>
  )
}

export default StudentProjects
