/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";  
import { useAppSelector } from "@/store";
import EnquiryForm from "./EnquiryForm";
import Popup from "./Popup";

export default function MainForm({ coursesData,  }: any) {
  const show = useAppSelector((state:any) => state.HomepageReducer.showform);
  const formsubmitted = useAppSelector((state:any) => state.HomepageReducer.formSubmitted);

  const [showFlyOut, setShowFlyOut] = useState<boolean>(show);

  const [submitted, setSubmitted] = useState<any>(false);
  const submit = () => {
    setSubmitted(true);
  };

  const [list, setList] = useState<any>([]);
  const [scrollTriggered, setScrollTriggered] = useState<any>(false); // Track if scroll triggered popup
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setShowFlyOut(true);
    // }, 20000);

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      [5, 15, 40, 80].forEach((threshold) => {
        if (scrollPercentage >= threshold && !scrollTriggered[threshold]) {
          if (submitted == false) {
            // console.log("firstsubmitted", submitted);
            setShowFlyOut(true);
          }
          setScrollTriggered((prev: any) => ({ ...prev, [threshold]: true })); // Prevent reopening for the same threshold
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // clearInterval(interval); // Cleanup interval on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTriggered, submitted]);

  // console.log("test", data);

  return (
    <div
      className={`md:flex items-stretch md:px-10  overflow-hidden  md:justify-between gap-10 ${
        submitted && "hidden -z-[99999999]  absolute top-0 left-0  "
      }`}
    >
      {
        <Popup showSidebar={showFlyOut || show} setShowSidebar={setShowFlyOut}>
          <div className="h-full w-full">
            <EnquiryForm
              setShowSidebar={setShowFlyOut}
              list={list}
              setList={setList}
              coursesData={coursesData}
              setShowFlyOut={setShowFlyOut}
              submit={submit}
            />
          </div>
        </Popup>
      }
    </div>
  );
}
