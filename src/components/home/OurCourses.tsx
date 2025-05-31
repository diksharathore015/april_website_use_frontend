/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { useRouter } from "next/navigation";
import React from "react";
import jdata from "../../components/data/Jdata.json";
import Link from "next/link";

export default function OurCourses({}: any) {
  // const router = useRouter();
  const data2 = jdata.courses;
  console.log("data2data2", data2);
  return (
    <div className="relative max-w-7xl mx-auto">
      {/* <div className="bg-primary py-20 mt-72 "> */}
      <div className="flex flex-wrap gap-10  py-10  justify-center w-full overflow-auto  ">
        <h1 className="inline-block w-full text-2xl font-bold text-center text-gray-800 mb-6">
          Courses At Royal defence Academy{" "}
        </h1>
        {data2.map((item: any, i: any) => (
          <Link
           href={(`courses/${item.slug}`)}
            key={i}
            className="w-72 h-72 bg-secondary hover:cursor-pointer flex items-center justify-center flex-col transition-all duration-500  "
          > <h2 className="text-white  md:text-2xl text-lg  text-center capitalize  font-playfair ">
              {item.title.replaceAll(/{location}|{Location}/g, "")}
            </h2>
            <p className="text-center text-white text-xs p-3">
              {item?.short_description.replaceAll(/{location}|{Location}/g, "")}
            </p>
          </Link>
        ))}
        {/* <div className="w-72 h-72 bg-secondary  flex items-center justify-center flex-col  ">
            {" "}
            <h2 className="text-white  text-5xl text-center  font-playfair ">
              Militry school coaching
            </h2>{" "}
            <p className="text-center text-white text-xs p-3">
              {" "}
              Preparing for Sainik School entrance exams requires strong
              fundamentals in Mathematics, English, General Knowledge,{" "}
            </p>
          </div>
          <div className="w-72 h-72 bg-secondary flex items-center justify-center flex-col  ">
            <h2 className="text-white  text-5xl text-center  font-playfair ">
              RIMC school coaching{" "}
            </h2>
            <p className="text-center text-white text-xs p-3">
              {" "}
              Preparing for Sainik School entrance exams requires strong
              fundamentals in Mathematics, English, General Knowledge,{" "}
            </p>
          </div>
          <div className="w-72 h-72 bg-secondary  flex items-center justify-center flex-col  ">
            <h2 className="text-white  text-5xl text-center  font-playfair ">
              AISSEE Preparation
            </h2>
            <p className="text-center text-white text-xs p-3">
              {" "}
              Preparing for Sainik School entrance exams requires strong
              fundamentals in Mathematics, English, General Knowledge,{" "}
            </p>
          </div> */}
      </div>
      {/* <div className=" ">
          <h1 className="text-4xl font-semibold font-playfair text-white text-center py-4  ">
            Sainik School Preparation – The Path to Success
          </h1>
          <p className="text-white tracking-wider text-center">
            Preparing for Sainik School entrance exams requires strong
            fundamentals in Mathematics, English, General Knowledge, and
            Intelligence. Along with academics, physical fitness and personality
            development play a crucial role. A well-structured coaching program
            can significantly boost a students chances of success. <br /> Royal
            Defence Academy stands out as the best institute for Sainik School
            preparation due to its expert faculty, structured curriculum, and
            disciplined environment. With regular mock tests, personalized
            guidance, and physical training, the academy ensures students are
            well-prepared for both the written exam and interview. Their high
            success rate and comprehensive study materials make them the top
            choice for aspiring cadets.
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
}
