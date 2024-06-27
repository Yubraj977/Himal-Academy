import React, { useState } from 'react'
import lab1 from '/features/lab1.jpeg'
import lab2 from '/features/lab2.jpeg'
import lab3 from '/features/lab3.jpeg'
import lab4 from '/features/lab4.jpeg'
import lab5 from '/features/lab5.jpeg'
function Flab() {
    const images1 = [
        {
          url: lab5
        },
        {
          url: lab2
          
        },
        {
          url:lab3
        },
        {
          url: lab4
        },
        {
            url: lab1
          }
    
      ]
      const [currentImage1, setcurrentImage1] = useState(images1[2])
  return (
    <div>
      <div className='pt-top flex items-center flex-col px-mside lg:px-side'>
    
     
      <div className='mt-top '>
        <h1 className='text-3xl font-lato font-bold text-second'>Labs for practical </h1>
        <p className='font-lato text-lg lg:text-2xl  mt-6 lg:w-2/3  ml-6 '>
        Step into our labs and dive into a world of hands-on experimentation and discovery. Equipped with state-of-the-art tools and resources, our labs provide students with the perfect environment to explore scientific principles and unleash their creativity. Whether it's conducting experiments or developing innovative projects, our labs are where curiosity meets innovation.
        </p>
      </div>

      {/* iamges */}
      <div class="grid gap-4  border-red-300 mt-6">
        <div className='border-2  lg:aspect-video lg:h-[480px] h-[300px]'>
          <img class="h-full w-full object-cover rounded-lg"
            src={currentImage1.url}
            alt="" />
        </div>
        <div class="grid gap grid-cols-5  lg:gap-4   border-green-800">
          {
            images1.map((image1, index) => {
              return (
                <div
                className='' 
                onClick={() => setcurrentImage1(images1[index])}>
                  <div className='lg:w-32 lg:h-20  w-16 h-16 object-cover    border-black'>
                    <img
                      src={image1.url}
                      class=" h-full w-full object-cover rounded-xl" alt="gallery-image" />
                  </div>

                </div>
              )
            })
          }
   

        </div>
      </div>


      {/* Numbere Two */}
     

    </div>
    </div>
  )
}

export default Flab
