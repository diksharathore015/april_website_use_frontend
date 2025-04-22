/* eslint-disable @typescript-eslint/no-unused-vars */
import Banner from "@/components/home/Banner";
import OurCourses from "@/components/home/OurCourses";
import Students from "@/components/home/Students";
import apiDataController from "@/controllers/RequestController";
import { constants } from "buffer";
import Image from "next/image";
import { Constants } from "./constants/urls";
import { get } from "./actions/actions";
import HomePage from "@/components/home/HomePage";

export default async function Home() {
  const homepageCourse = await get(Constants.course);
  const homepagestudents = await get(
    `${Constants.studentslist}/?homepage=true`
  );
  const bannersdata = await get(Constants.banners);
  const faqs = await get(Constants.faqs);
  const instructors = await get(Constants.instructors);
  const facilities = await get(Constants.facilities);
  const homepagedata = await get(Constants.homepagedata);
  return (
    <div className="overflow-x-hidden">
      <Banner data={bannersdata} />
      <HomePage
        review={homepagestudents}
        instructors={instructors}
        faqs={faqs}
        facilities={facilities}
        homepagedata={homepagedata}
      />
      <OurCourses data={homepageCourse} />
      <Students data={homepagestudents} />
    </div>
  );
}
