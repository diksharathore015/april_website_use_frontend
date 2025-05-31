/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { get } from "../actions/actions";
import { Constants } from "../constants/urls";
import CoursePageCard from "@/components/courses/CoursePageCard";
import { div } from "framer-motion/client";
import jdata from "../../components/data/Jdata.json"
export default async function page() {
  // const course_list: any = await get(Constants.course);
  console.log("course_list", jdata.courses);
  return (
    <div>
      {jdata.courses.map((item: any, idx: any) => (
        <div key={idx}>
          <CoursePageCard course={item} />
        </div>
      ))}
    </div>
  );
}
