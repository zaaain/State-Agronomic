"use client";

import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import GoogleMapReact from "@/components/Map";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: require(".././public/agri.jpg"),
    city: "Rawalpindi",
    state: "Punjab",
    price: "99999999",
    status: "Rent",
  },
  {
    id: 2,
    img: require(".././public/agri2.jpg"),
    city: "Lahore",
    state: "Punjab",
    price: "1000000000",
    status: "Sale",
  },
];

const Home = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 33.582573,
    lng: 73.030492,
  });

  const pakCities = [
    { city: "Karachi", lat: 24.8607, lng: 67.0011, img: require(".././public/agri.jpg") },
    { city: "Lahore", lat: 31.5497, lng: 74.3436, img: require(".././public/agri2.jpg") },
    { city: "Islamabad", lat: 33.6844, lng: 73.0479, img: require(".././public/agri2.jpg") },
    { city: "Rawalpindi", lat: 33.5651, lng: 73.0169, img: require(".././public/agri2.jpg") },
    { city: "Faisalabad", lat: 31.4504, lng: 73.135, img: require(".././public/agri2.jpg") },
    { city: "Multan", lat: 30.1575, lng: 71.5249, img: require(".././public/agri2.jpg") },
    { city: "Hyderabad", lat: 25.3969, lng: 68.3772, img: require(".././public/agri2.jpg") },
    // Add more cities as needed
  ];

  return (
    <div>
      <div className="bg-white z-50 left-0 top-0 bottom-0 fixed items-center justify-center py-3 w-[70px] shadow-dashboard">
        <RiMenuLine
          style={{ color: "#668968", fontSize: "25px", margin: "0 auto" }}
        />
      </div>
      <div className="fixed left-[70px] top-0 z-50  pr-5 bottom-0 overflow-auto">
        <input
          placeholder="Search Land"
          className="bg-white shadow-dashboard rounded-[30px] p-5 h-[60px] outline-none w-[400px] ml-5 mt-2"
        />
        
         
       
      
        {/* {data && data.flatMap((item)=>(
          <div className="shadow-card px-2 ml-5 rounded-2xl mt-2">|
          <Image src={item.img} draggable={false} className="w-full max-h-[150px] rounded-2xl"/>
          <div className="px-2 mt-2 ">
            <div className="flex items-center justify-center">
          <div className=" bg-[#668968] px-5 h-[30px] rounded-[20px] flex justify-center items-center" >
          <p className="text-white text-[14px]">{item.status}</p>
          </div>
          </div>
          <p className="font-mono text-[15px] text-[#668968]">Price: <span className="font-mono text-[14px] text-[#000000]">{item.price}</span></p>
          <p className="font-mono text-[15px] text-[#668968]">City: <span className="font-mono text-[14px] text-[#000000]">{item.city}</span></p>

          </div>
         
        </div>
        ))} */}
      </div>
      <div className="flex fixed left-[500px] z-50">
        <div className="bg-white shadow-dashboard h-[30px] px-5 rounded-3xl ml-10 flex items-center mt-6">
          <p>Agri Land</p>
        </div>
        <div className="bg-white shadow-dashboard h-[30px] px-5 rounded-3xl ml-10 flex items-center mt-6">
          <p>Rental of agricultural</p>
        </div>
      </div>
      <GoogleMapReact coordinates={pakCities} setCoordinates={setCoordinates} />
    </div>
  );
};

export default Home;
