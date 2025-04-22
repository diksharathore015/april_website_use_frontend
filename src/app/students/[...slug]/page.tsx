import { get } from "@/app/actions/actions";
import { Constants } from "@/app/constants/urls";
import StudentDetail from "@/components/students/Student_main";
import React from "react";

export default async function Page({ params }: { params: { slug: string[] } }) {
  console.log("firstparams", await params.slug[0]);
  const param = await params.slug[0];
  const data = await get(`${Constants.allstudentslist}/?slug=${param}`);

  console.log("single course", data);
  return (
    <div>
      <StudentDetail studentData={data[0]} />
    </div>
  );
}
