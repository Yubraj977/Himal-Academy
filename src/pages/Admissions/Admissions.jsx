import React from 'react'
import { useEffect } from 'react';
function Admissions() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='pt-top flex flex-col items-center px-side'>

        <h1 className=' mt-top text-second font-playwrite text-5xl font-bold '>Admissions</h1>
        <div className='mt-top flex lg:flex-row flex-col gap-10'>
              <div className="left lg:w-1/3 flex flex-col gap-5  border-red-600" >
                <p className='font-lato text-lg'> Admission opens in the month of Chaitra from Class I to Class VI. If you are interested, please complete the Admission Procedures in order to get admission.</p>
                <p className='font-lato text-lg'>Students are selected based on their written examination followed by parents/guardians’ interviews.</p>
                <h2 className='font-bold text-2xl text-second'>Documents Required for Enrollment</h2>
                <ul className='list-decimal ml-6 font-lato'>
                  <li>2 copies of passport size photographs</li>
                  <li>Photocopy of the birth certificate</li>
                  <li>Photocopy of the latest result</li>
                  <li>Original Transfer Certificate from the previous school</li>
                </ul>
                <h2 className='text-second text-2xl font-bold'>Scholarships</h2>
                <p className='font-lato'>Merit and need-based scholarships are awarded to deserving students.</p>
              </div>
              <div className="left w-2/3 object-cover">
                <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/12/Free-School-Admission-Social-Media-Banner-Template-999x999.jpg" alt="" className='w-full h-full object-cover' />
              </div>
        </div>
    </div>
  )
}

export default Admissions
