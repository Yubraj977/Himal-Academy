import React from 'react'

function SchoolLife() {
  return (
    <div className='mt-top'>
      <div>
      <h1 className='font-bold pt-20 text-4xl text-center text-second'>School Life</h1>
      <div className='flex justify-between gap-12 mt-top  border-red-400'>
        <div className="left- w-1/3 relative">
          <h1 className='font-bold text-3xl relative -top-8 text-second'>Cafeteria
          </h1>
          <p className='my-4 font-lato '>
            We have three cafeterias that offer options to suit different tastes. All the cafeterias comply with good hygienic food standards with dining areas that are clean and well ventilated. Each outlet serves you wholesome, healthy, and hygienic meals.
          </p>
          <p className='my-4 font-lato'>The cafeterias are regularly monitored by our Quality Control Team (QCT) to ensure that the food served in the cafeterias is fresh and healthy

          </p>
          <p className='font-lato'>We make sure that:</p>
          <ul className='flex flex-col gap-1'>
            <li className=''> Premium quality ingredients are used</li>
            <li> Premium quality ingredients are used</li>
            <li> Premium quality ingredients are used</li>
          </ul>
        </div>
        <div className=" flex right-images  gap-8 w-2/3  text-cyan-900">
          <div className='w-1/3 h-[22rem]  rounded-xl'> 
            <img src={'https://images.unsplash.com/photo-1592188657297-c6473609e988?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" className='h-full w-full  rounded-xl '  />
          </div>
          <div className='flex w-2/3 h-[22rem] border-red-500 object-cover'>
        <img src={'https://images.unsplash.com/photo-1567168539593-59673ababaae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" className='h-full w-full  rounded-lg object-cover' />
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default SchoolLife
