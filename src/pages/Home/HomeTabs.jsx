import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 import science1 from '/school/school1.jpeg'
 import school6 from '/school/school6.jpeg'
export function HomeTabs() {
  const [activeTab, setActiveTab] = React.useState("Science");
  const data = [
    {
      label: "Science",
      value: "Science",
      desc: `Explore the wonders of science through our immersive curriculum, covering biology, chemistry, and physics. Hands-on experiments and research opportunities fuel curiosity and innovation, preparing students for careers in research, engineering, or healthcare.`,
      image:science1,
      apply:''
    },
    {
      label: "Management",
      value: "Management",
      desc: `Master the art of leadership and strategic decision-making with our dynamic management program. From marketing to finance, students gain practical skills and real-world experience, readying them for success in diverse industries and entrepreneurial ventures.`,
      image:school6,
      apply:''
    },
    {
      label: "Law",
      value: "Law",
      desc: `Dive into the complexities of legal theory and practice in our comprehensive law studies program. Analyze landmark cases and develop advocacy skills through moot court competitions and internships, preparing for careers as attorneys, judges, or policymakers.`,
      image:'https://images.unsplash.com/photo-1519070994522-88c6b756330e?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      apply:''
    },
  
  ];
  return (
    <>
    <div className="text-center font-bold text-5xl cursor-pointer">Our Streams</div>
  
    <Tabs value={activeTab} className='mt-2'>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0  "
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-red-900 text-xl font-bold" : "text-xl font-bold"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>



      <TabsBody>

         

        {data.map(({ value, desc,image, }) => (
          <TabPanel key={value} value={value}>
            
            <div className="flex w-full border justify-between lg:px-side gap-8 lg:gap-24 flex-col lg:flex-row">
            <div className="lg:w-1/3 h-80  border ">
              <img src={image} alt="" className="h-full w-full object-cover rounded-lg" />
            </div>
            <div className="lg:w-1/2 lg:py-10">
              <h1 className="font-bold text-4xl text-red-700">{value} Strem</h1>
              <p className="mt-2 ml-8 font-lato font-semibold"> 
              {desc}
              </p>
              <button className="bg-red-900 text-white py-2 px-10  rounded-sm ml-8 mt-2 font-bold">Apply Now</button>
             
            </div>
          </div>
          </TabPanel>
        ))}
      </TabsBody>



    </Tabs>
    </>
  );
}

export default HomeTabs;
