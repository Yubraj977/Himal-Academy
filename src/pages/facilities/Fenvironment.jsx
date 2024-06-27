import React, { useState } from 'react'
import env1 from '/features/env1.jpeg'
import env2 from '/features/env2.jpeg'
import env3 from '/features/env3.jpeg'
import env4 from '/features/env4.jpeg'
import env5 from '/features/env5.jpeg'

function Fenvironment() {
    const images1 = [
        {
          url: env1
        },
        {
          url: env2
        }, {
          url: env3
        },
        {
          url: env4
        },
        {
          url: env5
        }
    
      ]
      const [currentImage1, setcurrentImage1] = useState(images1[2])
  return (
    <div>
      <div className='pt-top flex items-center flex-col px-mside lg:px-side'>

      <div className='mt-top '>
        <h1 className='text-3xl font-lato font-bold text-second'>Thriving in Competition and Community</h1>
        <p className='font-lato text-lg lg:text-2xl  mt-6 lg:w-2/3  ml-6 '>
        At our school, students thrive in a dynamic environment that balances competitive spirit with a supportive community. From academic challenges to extracurricular activities, we foster excellence while nurturing a culture of kindness and collaboration.
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

export default Fenvironment
