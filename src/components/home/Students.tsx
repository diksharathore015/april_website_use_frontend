"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import jdata from "../../components/data/Jdata.json";
export default function Students({}: any) {
  // Transform the data to match the required structure
  const data = jdata.studentData;
  const students = data.map((student: any) => ({
    id: student.id,
    name: student.name,
    image: student.image.length > 0 ? student.image[0].file : "", // Use the first image
    review: student.review,
    rating: parseInt(student.rating, 10), // Ensure the rating is a number
    facebookLink: student.facebook_link,
    instagramLink: student.instagram_link,
    contactNumber: student.contact_number.split(",")[0], // Use the first contact number
    whatsappNumber: student.contact_number.split(",")[1],
  }));

  return (
    <div className="bg-primary rounded-lg mx-4">
      <section className="py-2 bg-white relative mt-20 rounded-tr-[16rem] border-t-4 border-l-4 border-primary">
        <div className="w-[100%] rounded-bl-full">
          <h2 className="text-2xl pt-10 font-bold text-center text-gray-800  font-baskervville absolute top-0 w-full  mb-8">
            Our Happy Students
          </h2>
        </div>
        <div className="w-[80%] mx-auto px-4 pb-24 pt-24">
          {/* Student Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
            {students?.map((student: any, i: any) => (
              <div
                key={i}
                className="relative bg-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 group"
              >
                {/* Profile Image */}
                <div className="relative w-40 h-40 mx-auto">
                  <Image
                    width={200}
                    height={200}
                    src={student.image || "https://via.placeholder.com/150"} // Fallback image
                    alt={student.name}
                    className="w-40 h-40 mx-auto rounded-full border-4 border-[#fff]"
                  />

                  {/* Social Icons (Hidden by Default, Show on Hover) */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition">
                    <a
                      href={student.facebookLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl hover:text-blue-500"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={student.instagramLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl hover:text-pink-500"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={`tel:${student.contactNumber}`}
                      className="text-white text-xl hover:text-green-500"
                    >
                      <FaPhone />
                    </a>
                    <a
                      href={`https://wa.me/${student.whatsappNumber}/?text=Hello%2C%20I%20want%20more%20information
`}
                      target="__blank"
                      className="text-white text-xl hover:text-green-500"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>

                {/* Student Details */}
                <h3 className="text-center mt-3 capitalize font-playfair text-3xl text-[#fff]">
                  {student.name}
                </h3>
                <p className="text-sm text-white text-center mt-2 line-clamp-2">
                  {student.review}
                </p>

                {/* Rating */}
                <div className="flex justify-center mt-3 text-yellow-500">
                  {"⭐".repeat(student.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
