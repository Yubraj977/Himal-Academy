import React from "react";
import video1 from '/video/video1.mp4'
const AboutHome = () => {
    return (
        <div>
            <div className="flex my-10 mt-top lg:px-side gap-8 flex-col lg:flex-row px-mside">
                <div className="left border h-full lg:w-1/2 ">
                    <img src="https://images.unsplash.com/photo-1514369118554-e20d93546b30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover rounded-lg" alt="the section" />
                </div>
                <div className="right lg:w-1/2">
                    <h1 className="flex flex-col">
                        <span className="text-3xl font-bold">Welcome to</span>
                        <span className="font-bold text-3xl font-playwrite text-second">Himal Academy</span>
                    </h1>

                    <p className=" font-medium mt-4 lg:mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quia inventore ad mollitia sed quidem magnam dolore deleniti consequuntur neque molestias fugiat quisquam, voluptates voluptatum, vel autem blanditiis, repellendus esse.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex beatae autem voluptatem eaque? Repellat placeat ad vitae quia! Quae consequatur, sed ullam quia laboriosam corrupti iure. Facilis, cumque voluptatibus?

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
