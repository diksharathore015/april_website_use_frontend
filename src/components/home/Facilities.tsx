"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// Facilities.tsx
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Facility = {
  title: string;
  description: string;
  image: string;
};

interface FacilitiesProps {
  facilities: Facility[];
}
import Jdata from "../data/Jdata.json";
const Facilities: React.FC<FacilitiesProps> = ({}: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  const facilities = Jdata.facilitiesData;
  console.log("facilitiesData", facilities);
  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Facilities At Royal defence Academy
      </h2>
      <div className="   mx-auto py-10">
        <Slider {...settings}>
          {facilities.map((facility: any, index: any) => (
            <div
              key={index}
              className="group relative bg-white   px-4  overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  width={400}
                  height={400}
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition duration-300">
                  {facility.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {facility.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md transition duration-300 group-hover:bg-indigo-500">
                Featured
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Facilities;
