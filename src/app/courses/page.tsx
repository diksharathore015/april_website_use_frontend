/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { get } from "../actions/actions";
import { Constants } from "../constants/urls";
import CoursePageCard from "@/components/courses/CoursePageCard";
import { div } from "framer-motion/client";

export default async function page() {
  const course_list: any = await get(Constants.course);
  console.log("course_list", course_list);
  return (
    <div>
      {course_list.map((item: any, idx: any) => (
        <div key={idx}>
          <CoursePageCard course={item} />
        </div>
      ))}
    </div>
  );
}
