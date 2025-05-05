"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
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

const CourseDetail = ({ course, allCourses, reviewData, slug }: any) => {
  console.log("slug", slug, course);
  const [locationType, setLocationType] = useState<any>("India");
  const location = slug[1] || "";
  const newLocation = locationType?.matchedItem?.title.replaceAll("-", " ");
  const findMatchingState = () => {
    const matchedState = course?.state?.find(
      (item: any) =>
        decodeURIComponent(item?.state_name.toLowerCase()).replace(" ", "") ===
        location
    );
    if (matchedState)
      return {
        type: "state",
        matchedItem: matchedState,
        title: matchedState?.state_name,
      };
    const matchedCity =
      course &&
      course?.city?.find(
        (item: any) =>
          decodeURIComponent(item?.city_name.toLowerCase()).replace(" ", "") ===
          location
      );
    // if (matchedCity) return { type: "city", matchedItem: matchedCity };
    if (matchedCity) {
      // Find the state that corresponds to this city.
      // It is assumed that matchedCity.state holds the state ID.
      const correspondingState = course?.state?.find(
        (state: any) => state.id === matchedCity.state
      );

      return {
        type: "city",
        matchedItem: matchedCity,
        title: `${matchedCity.city_name} ${
          correspondingState ? `, ${correspondingState.state_name}` : null
        }  `,
        stateName: correspondingState ? correspondingState.state_name : null,
      };
    }

    const matchedLocality: any = course?.locality?.find(
      (item: any) =>
        decodeURIComponent(item?.locality_name.toLowerCase())
          .replace(" ", "")
          .replace("%20", "") ===
        decodeURIComponent(
          location.toLowerCase().replace(" ", "").replace("%20", "")
        )
    );

    if (matchedLocality) {
      // Assume each locality object has a "city" property containing the city ID
      const correspondingCity = course?.city?.find(
        (city: any) => city.id == matchedLocality.city
      );
      // console.log("correspondingCity", correspondingCity);
      // Then find the state corresponding to the found city
      const correspondingState = correspondingCity
        ? course?.states?.find(
            (state: any) => state.id === correspondingCity.id
          )
        : null;

      // console.log("correspondingstate", correspondingCity);
      return {
        type: "locality",
        matchedItem: matchedLocality,
        cityName: correspondingCity ? correspondingCity.title : null,
        stateName: correspondingState ? correspondingState.title : "",
        title: `${matchedLocality.title} ${
          correspondingCity ? `, ${correspondingCity.city_name}` : null
        } ${correspondingState ? `, ${correspondingState.state_name}` : ""}`,
      };
    }

    return {
      type: "none",
      title: "india",
    }; // Return null if no match is found
  };

  const locationdata: any = findMatchingState();
  console.log("testlocation", locationdata);
  const averageRating =
    course?.student_list && course?.student_list.length > 0
      ? (
          course.student_list.reduce(
            (sum: number, student: any) => sum + Number(student.rating),
            0
          ) / course.student_list.length
        ).toFixed(1)
      : "0.0";

  // const totalStudents = course.students ? course.students.length : 0;
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments: any = pathname?.split("/").filter(Boolean);
  const [currentLocation, setCurrentLocation] = useState<any>(
    pathSegments?.length > 2
      ? pathSegments[2]
      : pathSegments?.length < 2
      ? pathSegments[1]
      : "india"
  );
  const [randomTitle, setRandomTitle] = useState(
    currentLocation ? "" : course?.title ?? "Royal Defence Academy"
  );
  return (
    <div className="bg-[#e8e8e8]">
      <div className="bg-white   max-w-[75%] mx-auto text-white min-h-screen mt-36 relative">
        <Breadcrumbs
          location={locationdata}
          imagearr={course.slider_images}
          coursemaintitle={course?.title
            .replaceAll(
              /(?:\{location\}|\{Location\}|\{royal defence \})/g,
              `${locationType?.matchedItem?.title ? newLocation : "india"}`
            )
            .replaceAll(
              /(?:\{State\}|\{state\}|\{royal defence \})/g,

              `${locationType.cityName || ""} ${
                (locationType.type != "locality" && locationType.stateName) ||
                ""
              }` ||
                "" ||
                ""
            )}
          coursepagemetatitle={course?.meta_title
            .replaceAll(
              /(?:\{location\}|\{Location\}|\{royal defence \})/g,
              `${locationType?.matchedItem?.title ? newLocation : "india"}`
            )
            .replaceAll(
              /(?:\{State\}|\{state\}|\{royal defence \})/g,

              `${locationType.cityName || ""} ${
                (locationType.type != "locality" && locationType.stateName) ||
                ""
              }` ||
                "" ||
                ""
            )}
          title={randomTitle
            .replaceAll(
              /(?:\{location\}|\{Location\}|\{royal defence \})/g,
              `${locationType?.matchedItem?.title ? newLocation : "india"}`
            )
            .replaceAll(
              /(?:\{State\}|\{state\}|\{royal defence \})/g,

              `${locationType.cityName || ""} ${
                (locationType.type != "locality" && locationType.stateName) ||
                ""
              }` ||
                "" ||
                ""
            )}
        />
        <div className="bg-primary absolute w-full h-96  " />
        <div className=" md:px-3 mx-auto  md:py-10">
          {/* Course Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="col-span-2">
              <p className="text-sm text-purple-300 mb-2">
                Teaching & Academics › Test Prep › Test Taking Skills
              </p>
              <h1 className="text-3xl md:text-4xl capitalize font-bold">
                {course?.title.replaceAll(
                  /{location}|{Location}/g,
                  locationdata?.title || "India"
                )}
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                {course.short_description.replaceAll(
                  /{location}|{Location}/g,
                  locationdata?.title || "India"
                )}
              </p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 text-lg font-semibold">
                  {averageRating}
                </span>
                Expand all sections
                <span className="text-gray-300 text-sm ml-2">
                  ({course.student_list ? course.student_list.length : 0}{" "}
                  ratings){" "}
                  {course.student_list ? course.student_list.length : 0}{" "}
                  students
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                Created by{" "}
                <span className="text-white font-semibold">
                  {course.created_by || "Unknown Instructor"}
                </span>
              </p>
              <p className="text-gray-400 text-sm">
                Last updated {course.last_updated || "N/A"} · English · English
                [Auto]
              </p>
              <div className="mt-5 ">
                <CourseContent
                  allCourses={allCourses}
                  reviewData={reviewData}
                />
              </div>
              <div className="flex items-start mt-4 gap-4 justify-start">
                {course.slider_images.map((item: any, i: any) => (
                  <div key={i}>
                    <Image
                      src={item || "/placeholder.png"}
                      alt={course.title}
                      className=" h-56 w-56 object-cover"
                      width={800}
                      height={400}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Pricing and Features */}
            <div className="bg-white p-3  shadow-lg">
              <Image
                src={
                  course.slider_images
                    ? course.slider_images[0]
                    : "/placeholder.png"
                }
                alt={course.title}
                className="w-full h-60 object-contain"
                width={800}
                height={400}
              />
              <h2 className="text-2xl font-bold text-gray-800">
                ₹{course.price || "N/A"}
              </h2>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-gray-800 font-semibold py-2  mt-4">
                Enquire Now
              </button>
              <button className="w-full capitalize bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2  mt-2">
                call us
              </button>

              <div className="mt-3 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  This course includes:
                </h3>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex items-center space-x-2">
                    <MdOutlineOndemandVideo size={20} />
                    <span>{course.duration} </span>
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

          {/* Course Content */}
        </div>
        <hr />
        <div className="flex  md:py-10  ">
          <div className="w-[68%]    flex">
            <StudentList
              locationdata={locationdata}
              data={course.student_list}
            />
          </div>
          <div className="w-[30%]">
            <EnquiryBox />
          </div>
        </div>
        {<Reviews reviewData={reviewData} locationdata={locationdata} />}
        <div className="px-7 pt-2">
          <h2 className="text-xl font-rubik font-semibold  text-gray-800">
            {course.title.replaceAll(
              /{location}|{Location}/g,
              locationdata?.title || "India"
            )}
          </h2>
          <p className="text-gray-600">
            {course.description.replaceAll(
              /{location}|{Location}/g,
              locationdata?.title || "India"
            )}
          </p>

          <Course_locations
            locations={course.city}
            slug={course.slug}
            title={course?.title.replaceAll(
              /{location}|{Location}/g,
              locationdata?.title || "India"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
