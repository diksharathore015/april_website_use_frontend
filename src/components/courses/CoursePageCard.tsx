/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTv, FaCertificate } from "react-icons/fa6";
import { MdOutlineOndemandVideo, MdStarRate } from "react-icons/md";
import { assets } from "@/app/constants/Appasets";
import { store } from "@/store";
import { setShowForm } from "@/store/homepageSlice";

const CoursePageCard = ({ course }: any) => {
  const title = course?.title.replace("{location}", "india");
  const description = course?.description.replace("{location}", "india");
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="border p-4 md:mt-32 rounded-lg shadow-md bg-white w-full  max-w-[75%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="col-span-2">
          <h1 className="text-3xl md:text-4xl capitalize font-bold">
            {course?.title.replaceAll(/{location}|{Location}/g, "India")}
          </h1>
          <p className="text-gray-400 text-lg mt-2">
            {course?.short_description.replaceAll(
              /{location}|{Location}/g,
              "India"
            )}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-lg font-semibold"></span>

            <span className="text-gray-400 text-sm ml-2">
              <MdStarRate className="inline-block mb-2  text-yellow-400" /> (
              {course?.student_list ? course?.student_list.length : 0} ratings){" "}
              {course?.student_list ? course?.student_list.length : 0} students
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Created by{" "}
            <span className="text-white font-semibold">
              {course?.created_by || "Unknown Instructor"}
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            Last updated {course?.last_updated || "N/A"} · English · English
            [Auto]
          </p>

          <div className="   t mt-6    justify-start">
            <Slider {...sliderSettings}>
              {course?.slider_images?.map((img: any, idx: any) => (
                <div key={idx} className="p-1">
                  <Image
                    src={img || assets.logo}
                    alt={`Course Image ${idx + 1}`}
                    width={800}
                    height={300}
                    className="rounded-lg object-cover  w-full h-72"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="bg-white px-3  shadow-lg">
          <Image
            src={
              course?.slider_images.length > 0
                ? course?.slider_images[0]
                : assets.logo
            }
            alt={course?.title}
            className="w-full h-60 object-contain"
            width={800}
            height={400}
          />
          <h2 className="text-2xl font-bold text-gray-800">
            ₹{course?.price || "N/A"}
          </h2>
          <button
            onClick={() => store.dispatch(setShowForm(true))}
            className="w-full bg-purple-600 hover:bg-purple-700 text-gray-800 font-semibold py-2  mt-4"
          >
            Enquire Now
          </button>
          <div className="w-full mt-10   py-2 bg-gray-700 hover:bg-gray-800">
            {" "}
            <a
              href={`tel:${course?.contact_number}`}
              target="_blank"
              className="w-full  md:px-40 text-center mt-10 mx-auto capitalize  bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2  "
            >
              call us
            </a>
          </div>

          <div className="mt-3 space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              This course includes:
            </h3>
            <ul className="text-gray-500 space-y-2">
              <li className="flex items-center space-x-2">
                <MdOutlineOndemandVideo size={20} />
                <span>{course?.duration} </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaTv size={20} />
                <span>Access on online and Offline </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCertificate size={20} />
                <span>Certificate of completion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2 line-clamp-4">{description}</p>
        <Link
          href={`/course/${course?.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          Learn More <BsArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default CoursePageCard;
