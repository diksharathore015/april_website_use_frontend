/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

export default function StudentDetail({ studentData }: any) {
  console.log("firststudentData0", studentData);
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 capitalize">
          {studentData.name}
        </h1>
        <p className="text-sm text-gray-500">{studentData.detail}</p>
        <div className="mt-4">
          <a
            href={studentData.youtube_link}
            target="_blank"
            className="text-blue-500 hover:underline mr-4"
          >
            YouTube
          </a>
          <a
            href={studentData.facebook_link}
            target="_blank"
            className="text-blue-500 hover:underline mr-4"
          >
            Facebook
          </a>
          <a
            href={studentData.instagram_link}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Images Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Images</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {studentData.image.map((img: any) => (
            <div key={img.id} className="rounded-lg overflow-hidden shadow-md">
              <Image 
              width={200}
              height={200}
                src={img.file}
                alt={img.alternative_test}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-800">
                  {img.title}
                </h3>
                <p className="text-xs text-gray-500">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Courses</h2>
        <ul className="list-disc list-inside mt-2">
          {studentData.courses.map((course: any) => (
            <li key={course.id} className="text-gray-700">
              {course.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Location Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Location</h2>
        <p className="text-gray-700">
          State:{" "}
          {studentData.states.map((state: any) => state.state_name).join(", ")}
        </p>
        <p className="text-gray-700">
          Cities:{" "}
          {studentData.cities.map((city: any) => city.city_name).join(", ")}
        </p>
        <p className="text-gray-700">
          Localities:{" "}
          {studentData.localities
            .map((loc: any) => loc.locality_name)
            .join(", ")}
        </p>
      </div>

      {/* Contact and Meta Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Contact & Metadata
        </h2>
        <p className="text-gray-700">
          Contact Number: {studentData.contact_number}
        </p>
        <p className="text-gray-700">Meta Title: {studentData.meta_title}</p>
        <p className="text-gray-700">
          Meta Description: {studentData.meta_descriptions}
        </p>
        <p className="text-gray-700">
          Meta Keywords: {studentData.meta_keyWords}
        </p>
      </div>

      {/* Rating & Review Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Rating & Review</h2>
        <p className="text-gray-700">Rating: {studentData.rating}</p>
        <p className="text-gray-700">Review: {studentData.review}</p>
      </div>
    </div>
  );
}

// Sample usage
// Pass `studentData` as a prop to this component to render the UI
// <StudentDetail studentData={data} />
