/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { FaStar, FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { BiMessageAltDetail, BiSearch } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaThumbsUp,
  FaYoutube,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { store } from "@/store";
import { setShowForm } from "@/store/homepageSlice";

const ItemCard = ({ item, locationdata }: { item: any; locationdata: any }) => {
  const placeholderImage = "/placeholder.png";
  const nameToSlug = (name: any) => {
    return name
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .trim() // Trim leading/trailing whitespace
      .replace(/\s+/g, "-"); // Replace spaces with dashes
  };
  const router = useRouter();
  return (
    <div className="flex border shadow-sm p-4 bg-white w-full">
      {/* Left Image */}
      <div className="w-40 h-44 overflow-hidden rounded-md flex-shrink-0">
        <Image
          src={item.image?.[0]?.file || placeholderImage}
          alt={item.image?.[0]?.alternative_text || "Academy image"}
          width={128}
          height={160}
          onClick={() => router.push(`/students/${nameToSlug(item.name)}/`)}
          className="object-cover w-full h-full hover:cursor-pointer "
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between flex-grow ml-4">
        {/* Top Info */}
        <div>
          <div className="flex justify-between ">
            <h3 className="text-xl flex items-start font-bold capitalize text-gray-800">
              <FaThumbsUp className="mt-1 mr-1 text-white bg-black p-[3px] rounded-[5px]" />{" "}
              {item.name || "No Name"}
            </h3>
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              {item.youtube_link && (
                <a
                  href={item.youtube_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    className="text-red-600 hover:scale-110 transition"
                    size={28}
                  />
                </a>
              )}
              {item.facebook_link && (
                <a
                  href={item.facebook_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    className="text-blue-700 hover:scale-110 transition"
                    size={28}
                  />
                </a>
              )}
              {item.instagram_link && (
                <a
                  href={item.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="text-pink-600 hover:scale-110 transition"
                    size={28}
                  />
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <div className="bg-green-700 text-white  font-bold px-2 py-1 rounded flex items-center">
              <FaStar className="mr-1 text-white" />
              {item.rating || "4.2"}
            </div>
            <span className="text-sm text-gray-600">549 Ratings</span>
            <span className="text-xs text-orange-700 border flex px-2  py-1 rounded-md bg-orange-50">
              <BiSearch className="mt-[2px]" /> Top Search
            </span>
          </div>

          {/* Address */}
          <p className="text-sm text-gray-600 mt-2 flex items-center">
            <FaMapMarkerAlt className="mr-1" />{" "}
            {item.address || locationdata.title || "No Address Available"}
          </p>

          {/* Tags */}
          <div className="flex gap-2 mt-2 flex-wrap">
            {item?.meta_keyWords?.split(",").map((item: any, i: any) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-100  text-gray-400 border rounded"
              >
                {item.replaceAll(/{location}|{Location}/g, "India")}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4 w-[70%] ">
          <button className="flex-1 flex items-center justify-center bg-green-700 text-white text-sm py-2 rounded hover:bg-green-800">
            <FaPhoneAlt className="mr-1" /> Show Number
          </button>
          <button className="flex-1 flex items-center justify-center bg-white text-green-600 border text-sm py-2 rounded hover:text-white hover:bg-green-700">
            <FaWhatsapp className="mr-1" /> WhatsApp
          </button>
          <button    onClick={() => store.dispatch(setShowForm(true))} className="flex-1 flex items-center justify-center bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700">
            <BiMessageAltDetail className="mr-1" /> Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
