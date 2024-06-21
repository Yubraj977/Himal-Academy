import React from 'react'
import { useEffect } from 'react';
function Carrier() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='h-screen pt-top  flex flex-col items-center'>
      <h1 className='mt-top font-bold text-5xl font-playwrite text-second'>Carrier Paths</h1>
      <h2 className='mt-6 font-lato text-xl'>Explore Oportunity after School & College</h2>
    </div>
  )
}

export default Carrier
