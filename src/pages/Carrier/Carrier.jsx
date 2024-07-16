import React from 'react'
import { useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
function Carrier() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=' pt-top  flex flex-col items-center'>
    
      {/* From the other componnets */}

      <h1 className='mt-top font-bold text-5xl font-playwrite text-second'>Carrier Paths</h1>
     

    

      {/* First Student Testimonial */}
      <div className='flex border mt-4'>
        <div className="left">
          <img src="" alt="" />
        </div>
        <div className="right"></div>

      </div>
      <div className='border'>

      </div>



      {/* The time table */}
      <div>
        <div>
          <div className="flex items-center justify-between h-full w-full absolute z-0">
            <div className="w-1/3 bg-white h-full" />
            <div className="w-4/6 ml-16 bg-gray-100 h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3}>
              <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                What our studnets are
                <br />
                saying
              </h1>
              <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">What our students are saying</h1>
              <Slider>
                <Slide index={0} tabIndex="null">
                  <div className="flex">
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                        <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Some of the best growth in Himal Academy</h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            I feel very privileged and lucky to have studied in Himal Academy, finest school around the town. The wholesome approach of student's development throught best education and extra curricular activities sets Himal Academy a part from others. Personal care of teaching faculties helped me get a long way and compelete with the excellent students of the country.  Himal is not just about educatin but also about growth as an individual. I feel greateful as I sepnt seven years of my golden period in Himal Academy
                            </p>
                        </div>
                        <div className="md:mt-0 pt-8 ">
                          <p className="text-base font-medium leading-4 text-gray-800">Dr Rajan Adhikari</p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Mbbs Tu Teaching Hospital</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                
                <Slide index={1}>
                  <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                        <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">My pov for Himal Academy !</h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                         Many of us are in dilemma after SEE, as we have to choose the best college for our further study. Being the first batch, I can suggest you to join Himal Academy. The college with goood environment and all facilites is required for overall development. My two years of studies in Himal Academy has given me a great input both academically and morally. Himal Academy has very good environment for learning and improving overselves. We had learn many things and enjoyed everything in student life and teachers were very supportive and caring. I really miss those beautiful days of my college life
                          </p>
                        </div>
                        <div className="md:mt-0 pt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">Asmita CHaudhary</p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Bsc. Ag ,Tu </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                
                <Slide index={3}>
                  <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                        <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800"> How Himal Academy shapes me nicely !</h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                        Dear Himal Academy, As a student with aspirations of becoming a pilot, my time at Himal has been invaluable in shaping my journey towars acheiving this goal. From the moment I stepped onto the school, I felt welcomed and supported in pursing my passion. The dedicated teachers went above and beyond to ensure that we not only understand the theoretical concepts but also had ample opportunities to apply them in real-world senearios.  
                          </p>
                        </div>
                        <div className="md:mt-0 pt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">Nabin D.C </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">pilot 2074 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className="flex items-center mt-8">
                <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                </ButtonBack>

                <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>

 
    </div>
  )
}

export default Carrier
