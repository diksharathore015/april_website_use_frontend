/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { get } from "@/app/actions/actions";
// import { Constants } from "@/app/constants/urls";
import StudentDetail from "@/components/students/Student_main";
import React from "react";
import jdata from "../../../components/data/Jdata.json";
export default async function Page({ params }: { params: { slug: string[] } }) {
  console.log("firstparams", await params.slug[0]);
  const param = await params.slug[0];
  // const data = await get(`${Constants.allstudentslist}/?slug=${param}`);
  const sData = jdata.studentData;
  const nameToSlug = (name: any) => {
    return name
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .trim() // Trim leading/trailing whitespace
      .replace(/\s+/g, "-"); // Replace spaces with dashes
  };
  const student = [sData.find((c) => nameToSlug(c.name) === param)];
  console.log("single course", student);
  return (
    <div>
      <StudentDetail studentData={student[0]} />
    </div>
  );
}
