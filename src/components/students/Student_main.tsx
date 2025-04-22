/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from "next/image";
import React from "react";
import ImageGrid from "./Imagegrid";
import { FaThumbsUp, FaWhatsapp } from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import CourseCard from "../courses/CourseCard";

export default function StudentPage({ studentData }: any) {
  const keywordSlugMapping = studentData?.courses.flatMap((course: any) => {
    const keywords = course.meta_keywords
      .split(/,|\./)
      .map((keyword: any) => keyword.trim());
    return keywords.map((keyword: any) => ({
      keyword,
      slug: `/courses/${course.slug}`,
    }));
  });
  console.log("keywordSlugMapping", keywordSlugMapping);
  return (
    studentData && (
      <div className="bg-gray-100 min-h-screen py-8 md:mt-32">
        {/* Main Container */}
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="bg-white shadow  p-6 mb-8">
            <div className="w-full  gap-2">
              <ImageGrid images={studentData?.image} />
              {/* {studentData.image.map((img: any) => (
              <div key={img.id} className="  overflow-hidden shadow">
                <Image
                  src={img.file}
                  alt={img.alternative_test}
                  width={300}
                  height={200}
                  className="object-cover w-full h-40"
                />
              </div>
            ))} */}
            </div>{" "}
            <h1 className="text-2xl flex items-start font-bold capitalize text-gray-800">
              <FaThumbsUp className="mt-1 mr-1 text-white bg-gray-700 p-[3px] rounded-[5px]" />{" "}
              {studentData.name || "No Name"}
            </h1>
            <div className="text-xl flex items-start  px-2 rounded-md font-bold capitalize text-white w-14 mt-2 bg-green-700">
              <BsStarFill className="mt-1 mr-1    rounded-[5px] text-white" />{" "}
              {studentData.rating || "No Name"}
            </div>
            div
            <p className="text-sm text-gray-600">{studentData.detail}</p>
            <p className="text-sm text-gray-600">
              {studentData.meta_descriptions}
            </p>
            <div className="flex gap-2 mt-4 w-[40%] ">
              <button className="flex-1 flex items-center justify-center bg-green-700 text-white text-sm py-4 px-5 rounded hover:bg-green-800">
                <FaPhoneAlt className="mr-1" /> Show Number
              </button>
              <button className="flex-1 flex items-center justify-center bg-white text-green-600 border text-sm py-4 px-5 rounded hover:text-white hover:bg-green-700">
                <FaWhatsapp className="mr-1" /> WhatsApp
              </button>
              <button className="flex-1 flex items-center justify-center bg-blue-600 text-white text-sm py-4 px-5 rounded hover:bg-blue-700">
                <BiMessageAltDetail className="mr-1" /> Send Enquiry
              </button>
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href={studentData.youtube_link}
                target="_blank"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <a
                href={studentData.facebook_link}
                target="_blank"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={studentData.instagram_link}
                target="_blank"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Student Details */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Quick Information
            </h2>

            <p className="text-gray-700">
              <strong>Name:</strong> {studentData.name}
            </p>
            <p className="text-gray-700">
              <strong>Contact Number:</strong> {studentData.contact_number}
            </p>
            <p className="text-gray-700">
              <strong>Review:</strong> {studentData.review}
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Courses Enrolled
            </h2>
            {studentData.courses.map((item: any, i: any) => (
              <div key={i}>
                <CourseCard data={item} />{" "}
              </div>
            ))}
          </div>

          {/* Courses and Reviews */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              keywords
            </h2>
            {keywordSlugMapping.map((item: any, i: any) => (
              <a
                key={i}
                target="_blank"
                href={`${item.slug}`}
                className="bg-white py-1 hover:bg-blue-500 hover:text-white  px-2 mx-1 border border-1 w rounded text-blue-500 border-blue-300"
              >
                {item.keyword.replaceAll(/{location}|{Location}/g, "")}
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Location
            </h2>
            <p className="text-gray-700">
              <strong>State:</strong>{" "}
              {studentData.states
                .map((state: any) => state.state_name)
                .join(", ")}
            </p>
            <p className="text-gray-700">
              <strong>Cities:</strong>{" "}
              {studentData.cities.map((city: any) => city.city_name).join(", ")}
            </p>
            <p className="text-gray-700">
              <strong>Localities:</strong>{" "}
              {studentData.localities
                .map((loc: any) => loc.locality_name)
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    )
  );
}
