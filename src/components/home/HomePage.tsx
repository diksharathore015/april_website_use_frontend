"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeacherCard from "./TeacherCard";
import FAQ from "./Faqs";
import Facilities from "./Facilities";
import { store } from "@/store";
import { setShowForm } from "@/store/homepageSlice";
const HomePage = ({
  review,
  instructors,
  faqs,
  facilities,
  homepagedata,
}: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  // console.log("homepagedata", homepagedata);
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="text-center py-10 bg-white">
        <h1 className="text-4xl font-bold">Welcome to Royal Defence Academy</h1>
        <p className="mt-4 text-lg">
          Shaping future leaders with excellence and discipline.
        </p>
        <button
          onClick={() => store.dispatch(setShowForm(true))}
          className="mt-6 px-6 py-2 bg-white text-[#6b0804] font-semibold rounded-lg hover:bg-gray-200"
        >
          Join Us
        </button>
      </header>

      <section className="py-10 px-4 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {homepagedata[0].title}
        </h2>
        <p className="text-gray-600 text-justify leading-relaxed max-w-6xl mx-auto">
          {homepagedata[0].description}
        </p>
      </section>
      <section className="py-10 bg-gray-100 px-4">
        <Facilities facilities={facilities} />
      </section>

      <section className="py-12  ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <section className="py-10 bg-gray-100 px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Testimonials
        </h2>
        <div className="   ">
          <Slider {...settings}>
            {review.map((item: any, i: number) => (
              <div key={i} className="rounded-lg p-5 h-44 bg-gray-100 ">
                <div className="bg-white p-3 h-40 ">
                  {" "}
                  <p className="text-gray-600 italic line-clamp-4">
                    {item.review}
                  </p>
                  <p className="mt-4 flex justify-end items-center font-semibold">
                    <Image
                      src={item.image[0].file}
                      alt={item.name}
                      className=" w-7 h-7  object-cover rounded-full"
                      width={200}
                      height={200}
                    />
                    <span className="capitalize">{item.name}</span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-10 px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Faculties
        </h2>
        <div className="">
          <Slider {...settings2}>
            {instructors.map((item: any, i: any) => (
              <TeacherCard key={i} {...item} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
