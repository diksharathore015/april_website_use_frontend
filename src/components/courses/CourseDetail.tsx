"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import { FaTv, FaCertificate } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import CourseContent from "./CourseContent";
import StudentList from "./StudentList";
import Course_locations from "./Course_locations";
import EnquiryBox from "./EnquiryBox";
import Reviews from "./Reviews";
import Breadcrumbs from "../home/Breadcrumbs";
import { usePathname, useRouter } from "next/navigation";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "@/store";
import { setShowForm } from "@/store/homepageSlice";

const CourseDetail = ({ course, allCourses, reviewData, slug }: any) => {
  const [locationType, setLocationType] = useState<any>("India");
  const location = slug[1] || "";

  const findMatchingState = () => {
    const matchedState = course?.state?.find(
      (item: any) =>
        decodeURIComponent(item.toLowerCase()).replace("-", " ") == location
    );
    if (matchedState)
      return {
        type: "state",
        matchedItem: matchedState,
        title: matchedState?.state_name,
      };

    const matchedCity = course?.city_list?.find(
      (item: any) => decodeURIComponent(item?.toLowerCase()) === location
    );
    if (matchedCity) {
      const correspondingState = course?.state?.find(
        (state: any) => state.id === matchedCity.state
      );
      return {
        type: "city",
        matchedItem: matchedCity,
        title: `${matchedCity} `,
        stateName: correspondingState ? correspondingState.state_name : null,
      };
    }
    return { type: "none", title: "India" };
  };

  const locationdata: any = findMatchingState();
  const averageRating =
    course?.student_list && course?.student_list.length > 0
      ? (
          course?.student_list.reduce(
            (sum: number, student: any) => sum + Number(student.rating),
            0
          ) / course?.student_list.length
        ).toFixed(1)
      : "0.0";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  // Dynamically set meta data
  const metaTitle =
    course?.title
      .replaceAll(/{location}|{Location}/g, locationdata?.title || "India")
      .replaceAll(/{State}|{state}/g, locationdata?.stateName || "") ||
    "Course Detail";
  const metaDescription =
    course?.meta_description ||
    `Learn more about ${course?.title} and start your journey today!`;
  const metaKeywords = course?.meta_keyword || "courses, education, learning";

  return (
    <div className="bg-[#e8e8e8]">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Head>

      <div className="bg-white max-w-[75%] mx-auto text-white min-h-screen mt-36 relative">
        <Breadcrumbs
          location={locationdata}
          imagearr={course?.slider_images}
          coursemaintitle={course?.title
            .replaceAll(
              /{location}|{Location}/g,
              locationdata?.title || "India"
            )
            .replaceAll(/{State}|{state}/g, locationdata?.stateName || "")}
        />
        <div className="md:px-3 mx-auto md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="col-span-2">
              <h1 className="text-3xl md:text-4xl capitalize text-primary font-bold">
                {course?.title.replaceAll(
                  /{location}|{Location}/g,
                  locationdata?.title || "India"
                )}
              </h1>
              <p className="   text-primary  text-lg mt-2">
                {course?.short_description.replaceAll(
                  /{location}|{Location}/g,
                  locationdata?.title || "India"
                )}
              </p>
              <div className="mt-4">
                <Slider {...sliderSettings}>
                  {course?.slider_images?.map((item: any, i: any) => (
                    <div key={i}>
                      <Image
                        src={item || "/placeholder.png"}
                        alt={course?.title}
                        className="h-56 w-56 object-cover"
                        width={800}
                        height={400}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="bg-white p-3 shadow-lg">
              <Image
                src={
                  course?.slider_images
                    ? course?.slider_images[0]
                    : "/placeholder.png"
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
                className="w-full bg-purple-600 hover:bg-purple-700 text-gray-800 font-semibold py-2 mt-4"
              >
                Enquire Now 
              </button>
            </div>
          </div>
          <StudentList
            locationdata={locationdata}
            data={course?.student_list}
          />
        </div>
        <Reviews reviewData={reviewData} locationdata={locationdata} />
      </div>
      <Course_locations
        locations={[...course.states, ...course.city_list]}
        title={course?.title}
        slug={slug}
      />
    </div>
  );
};

export default CourseDetail;
