"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const Course_locations = ({ locations, title, slug }: any) => {
  console.log("Available Locations", locations, slug);
  // const router = useRouter();

  return (
    <div className="container mx-auto py-10 ">
      <h1 className="text-xl text-gray-800 font-semibold mb-4 text-left">
        Available Locations
      </h1>
      <div className="flex flex-wrap gap-2">
        {locations?.map((location: any, i: any) => (
          <div
            // onClick={() => {
            //   router.push(`/courses/${slug}/${location.city_name}`);
            // }}
            key={i}
            className=" "
          >
            <div>
              {" "}
              <Link
                target="__blank"
                href={`/courses/${slug}/${location}`}
                className="text-sm inline-block  text-gray-700 mb-2 capitalize"
              >
                {title?.replaceAll(
                  /{location}|{Location}/g,
                  location || "India"
                )}{" "}
                in {location} <span className="font-bold">|</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course_locations;
