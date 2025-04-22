/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const CourseCard = ({ data }: any) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {data.title.replaceAll(/{location}|{Location}/g, "India")}
          </h1>
          <p className="text-sm text-gray-500">Duration: {data.duration}</p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {data.slider_images.map((image: any, index: any) => (
            <Image
              key={index}
              src={image}
              width={200}
              height={200}
              alt={data.short_description}
              className="rounded-xl w-40 mb-4"
            />
          ))}
        </div>

        <p className="text-lg text-gray-700 mb-4">
          {data.description.replaceAll(/{location}|{Location}/g, "India")}
        </p>

        <div className="mb-4">
          <h2 className="font-semibold text-gray-800">Contact:</h2>
          <p className="text-gray-600">{data.contact_number}</p>
        </div>

        <div className="flex space-x-4 mb-4">
          <a
            href={`tel:${data.contact_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-11 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            Call
          </a>
          <a
            href={`https://wa.me/${
              data.contact_number
            }?text=${encodeURIComponent(
              "Hello, I want to enquire about Sainik School coaching."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
          >
            WhatsApp
          </a>
          <a
            href={data.youtube_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
          >
            YouTube
          </a>
          <a
            href={data.facebook_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Facebook
          </a>
          <a
            href={data.instagram_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
