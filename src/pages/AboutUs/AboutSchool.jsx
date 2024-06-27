import React from 'react'
import school3 from '/school/school3.jpeg'
import madhu from '/madhu.jpg'
function AboutSchool() {
  return (
    <div className='mt-32 flex flex-col items-center'>
      <h1 className='font-bold  text-xl lg:text-4xl font-playwrite text-second'>Let's Know About Our School well</h1>
      <div className='mt-top'>
      
            <img src={'https://images.unsplash.com/photo-1620003048292-c4db88559488?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" />
       
      </div>
      <div>
        <p className='font-lato text-2xl lg:text-4xl  mt-top lg:mx-12'>
           Himal Academy the residential school was established in Tuslipur Sub-Metroplitan City ward No:-06, Tulsipur , Dang Rapti Zone, provience No-5 Nepal in the year 2061Bs. It is an educational community where 
           students and teachers from diverse backgrounds learn, live and work together in congenial atmoshphere for holistic development. We plan to lauch Bachelor's Degree programmers in near future
             </p>
      </div>

      {/* Mett Our Founder And Cofounder */}
      <div className='flex w-full gap-1/2 mt-top gap-44 lg:gap-10 lg:flex-row flex-col '>
        <div className="left lg:w-1/2  h-96  border-green-500 ">
            <h1 className='font-semibold text-3xl font-lato'>Meet the Founder and Co-Founder</h1>
            <p className='mt-4 text-lg'>Himal Academy, was founded by principal Madhu Sudhan k.c, President Binay Kumar mishra and other founders.</p>
          {/* Founders Images */}
            <div className='flex gap-6 mt-4'>
                <div className="left-img h-96 w-1/2 object-cover">
                        <img src={madhu} alt="" className='h-full w-full rounded-lg'/>
                </div>
                <div className="right-img h-ful w-1/2 ">
                        <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full rounded-lg'/>
                </div>
            </div>
        </div>
        <div className="right lg:w-1/2 border mt-top flex flex-col gap-2">
            <p className='font-opensans'>It is our privilege to lead such a great academic institution consisting of dedicated staff, outstanding students, and an incredible parent community. We thoroughly enjoy watching students grow in an environment that fosters their overall academic and character development. I and Mrs. Bidya Limbu, the founding members, were both in the field of education years before LAS. We were aware of the numerous shortcomings and challenges faced by the private school education system. We took up the challenge to establish a center of learning and directed our passion towards imparting quality education at an affordable rate. It was established with 65 day scholar students in a small rented house. In course of time, LAS grew abundantly in size and stature, expanding into one of the largest academic institutions in the country, offering holistic and quality education from pre-primary to bachelor’s level.</p>
            <p className='font-opensans'>We strongly believe that the assurance of student quality comes from a high–end teaching program, delivered by well-qualified and dedicated teachers who take care to instill not just the knowledge but also the right attitude and skills in the students. Extra and co-curricular activities are an integral part of school life in LAS. The school conducts a range of events from social awareness camps to international cultural exchange programs imparting essential life skills to make them responsible well rounded global citizens.</p>
            
           
        </div>
      </div>

      {/* TimeLine */}
      <div className='mt-top flex flex-col items-center'>
        <h1 className='font-bold mt-top  text-xl lg:text-4xl font-playwrite text-second text-center'>Our Most Important Timelines</h1>
      {/* <!-- component --> */}
<section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div className="w-full max-w-6xl mx-auto  md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

            <div className="w-full max-w-3xl mx-auto">
            
              
                <div className="-my-28">

                    {/* <!-- Item #1 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        {/* <!-- Purple label --> */}
                        <div className="font-medium text-cyan-700 mb-1 sm:mb-0">The origin</div>
                        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-second after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-second bg-emerald-100 rounded-full">2061 Falugn, </time>
                            <div className="text-xl font-bold text-slate-900">Himal Academy was established in Tulsipur, Dang</div>
                        </div>
                        {/* <!-- Content --> */}
                        <div className="text-slate-500">
                            It was established in Tulsipur ward No: 6 in 2061 Bs with multiple supporters
                            </div>
                    </div>
                    
                    {/* <!-- Item #2 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        {/* <!-- Purple label --> */}
                        <div className="font-medium text-cyan-700 mb-1 sm:mb-0">The milestone</div>
                        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-second after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-second bg-emerald-100 rounded-full">May, 2021</time>
                            <div className="text-xl font-bold text-slate-900">Reached 5K customers</div>
                        </div>
                        {/* <!-- Content --> */}
                        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    
                    {/* <!-- Item #3 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        {/* <!-- Purple label --> */}
                        <div className="font-medium text-cyan-700 mb-1 sm:mb-0">The acquisitions</div>
                        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-second after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-second bg-emerald-100 rounded-full">May, 2022</time>
                            <div className="text-xl font-bold text-slate-900">Acquired various companies, inluding Technology Inc.</div>
                        </div>
                        {/* <!-- Content --> */}
                        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    
                    {/* <!-- Item #4 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        {/* <!-- Purple label --> */}
                        <div className="font-medium text-cyan-700 mb-1 sm:mb-0">The IPO</div>
                        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-3 after:bg-second after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-16 mb-3 sm:mb-0 text-second bg-emerald-100 rounded-full">May, 2023</time>
                            <div className="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div>
                        </div>
                        {/* <!-- Content --> */}
                        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>

                </div>
                {/* <!-- End: Vertical Timeline #1 --> */}
                
            </div>

        </div>
    </div>
</section>
      </div>
      <div className='mt-top'>
        <h1 className='font-bold mt-top  text-xl lg:text-4xl font-playwrite text-second text-center'>Our Board Of Directoers</h1>
        <div>
     

        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4"> Our motos</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                        <h2 className=' font-bold text-second text-lg after:content underline font-lato' >VISON</h2>
                        <p>  
                          To develop itself as the center of academic excellence as per national and international standards by shaping minds from greateness to gooodness.
                         </p>
                        <h2 className=' font-bold text-second text-lg after:content mt-4  font-lato underline' >MISSION</h2>
                        <p>
                            
                            To eastblish itself as a word-class learning center to inculcating postitive attitude, skills ability and value-based knowledge in students to compete sucessfully in their inclined disciplines.
                         
                         </p>
                      
                         </p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={school3} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default AboutSchool
