import React, { useState } from 'react'

function FLibrary() {
    const images1 = [
        {
          url: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
          url: 'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80',
    
        }, {
          url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
        },
        {
          url: 'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80'
        },
        {
          url: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80'
        }
    
      ]
      const [currentImage1, setcurrentImage1] = useState(images1[2])
  return (
    <div>
      <div className='pt-top flex items-center flex-col px-mside lg:px-side'>
      <h1 className='mt-top font-bold text-5xl font-playwrite text-second'>Facilities</h1>
      {/* Numbere One */}
      <div className='mt-top '>
        <h1 className='text-3xl font-lato font-bold text-second'>Library</h1>
        <p className='font-lato text-lg lg:text-2xl  mt-6 lg:w-2/3  ml-6 '>
        it has a well-equipped spacious library that currently boasts of an impressive updated collection of books from all genres. From academic research to classic novels, inspiring autobiographies on great personas and great lives, there is something to grab the interest of every book love
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

export default FLibrary
