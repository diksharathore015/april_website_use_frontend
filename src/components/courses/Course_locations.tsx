"use client";
import { useRouter } from "next/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const Course_locations = ({ locations, title, slug }: any) => {
  console.log("Available Locations", locations);
  const router = useRouter();

  return (
    <div className="container mx-auto py-10 ">
      <h1 className="text-xl text-gray-800 font-semibold mb-4 text-left">
        Available Locations
      </h1>
      <div className="flex flex-wrap gap-2">
        {locations.map((location: any) => (
          <div
            onClick={() => {
              router.push(`/courses/${slug}/${location.city_name}`);
            }}
            key={location.id}
            className=" "
          >
            <div>
              {" "}
              <h2 className="text-sm inline-block  text-gray-700 mb-2 capitalize">
                {title} in {location?.city_name}{" "}
                <span className="font-bold">|</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course_locations;
