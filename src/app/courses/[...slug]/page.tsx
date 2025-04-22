import { get } from "@/app/actions/actions";
import { Constants } from "@/app/constants/urls";
import CourseDetail from "@/components/courses/CourseDetail";
import React from "react";

export default async function Page({ params }: { params: { slug: string[] } }) {
  console.log("firstparams", await params.slug);
  const param = await params.slug[0];
  const courseData = await get(`${Constants.course}/?slug=${param}`);
  const allCourses = await get(`${Constants.courses_title}`);

  const reviewData = await get(
    `${Constants.review}/?course_id=${courseData[0].id}`
  );
  // console.log("courseData", courseData);

  return (
    <div>
      <CourseDetail
        slug={params.slug}
        course={courseData[0]}
        allCourses={allCourses}
        reviewData={reviewData}
      />
    </div>
  );
}
