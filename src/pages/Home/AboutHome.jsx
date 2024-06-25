import React from "react";
import video1 from '/video/video1.mp4'
import scholl5 from '/school/school5.jpg'

const AboutHome = () => {
    return (
        <div>
            <div className="flex my-10 mt-top lg:px-side gap-8 flex-col lg:flex-row px-mside">
                <div className="left border h-96 lg:w-1/2 rounded-3xl   ">
                    <img src={scholl5} className="h-full w-full object-contain rounded-3xl border " alt="the section" />
                </div>
                <div className="right lg:w-1/2">
                    <h1 className="flex flex-col">
                        <span className="text-3xl font-bold">Welcome to</span>
                        <span className="font-bold text-3xl font-playwrite text-second">Himal Academy</span>
                    </h1>

                    <p className=" font-medium mt-4 lg:mt-10">
                       
                    At Himal Academy, we are dedicated to providing an exceptional educational experience that goes beyond textbooks and classrooms. Our commitment to excellence is rooted in fostering intellectual curiosity, promoting personal growth, and preparing students to thrive in a dynamic world.
                    Located in a serene environment conducive to learning, Himal Academy stands as a beacon of knowledge and innovation. Our diverse community of learners, educators, and staff work together to create a supportive and inspiring atmosphere where every individual can achieve their full potential.
                    Join us at Himal Academy and embark on a journey of discovery, empowerment, and success. Together, let's shape a brighter future.

                    </p>
                </div>
            </div>


            <div className="flex my-10 lg:px-side gap-8 flex-col lg:flex-row px-mside mt-20" >
                <div className="right lg:w-1/2">
                    <h1 className="flex flex-col">
                        <span className="text-3xl font-bold"> Explore</span>
                        <span className="font-bold text-4xl text-cyan-900">HIMAL ACADEMY</span>
                    </h1>

                    <p className=" font-medium mt-4 lg:mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quia inventore ad mollitia sed quidem magnam dolore deleniti consequuntur neque molestias fugiat quisquam, voluptates voluptatum, vel autem blanditiis, repellendus esse.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex beatae autem voluptatem eaque? Repellat placeat ad vitae quia! Quae consequatur, sed ullam quia laboriosam corrupti iure. Facilis, cumque voluptatibus?

                    </p>
                </div>
                <video class="h-full  rounded-lg lg:w-1/2 w-full" controls>
                    <source
                    
                        src={'https://videos.pexels.com/video-files/5198161/5198161-uhd_2560_1440_25fps.mp4'}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>



            </div>
        </div>
    );
};

export default AboutHome;
