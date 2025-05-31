/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import apiDataController from "@/controllers/RequestController";
import { store, useAppSelector } from "@/store";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { setFormSubmitted, setShowForm } from "@/store/homepageSlice";
import { get } from "@/app/actions/actions";
import { Constants } from "@/app/constants/urls";
import jdata from "../../components/data/Jdata.json";
export default function EnquiryForm({
  setShowFlyOut,
  coursesData,
  setShowSidebar = true,
  submit,
}: any) {
  const [coursesdata, setCoursesData] = useState<any>(coursesData || []);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [city, setCity] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const location = useAppSelector(
    (state: any) => state.HomepageReducer.location
  );
  const pathname = usePathname();
  const apiKey: string = "7d8e5febbca194";
  const fetchCityByIP = async () => {
    try {
      const res = await fetch(`https://ipinfo.io/json?token=${apiKey}`);
      const data = await res.json();
      setCity(data.city);
      // console.log("City from IP:", data.city);
      // You can also get data.region, data.country etc.
    } catch (err) {
      console.error("Failed to fetch city by IP:", err);
    }
  };
  useEffect(() => {
    fetchCityByIP();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await get(Constants.course);
      setCoursesData(res);
    } catch (err) {
      console.log("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    if (!coursesData) fetchCourse();
  }, []);

  const [list, setList] = useState<any>([]);
  const handleChange = (option: any) => {
    setList((prevList: any) =>
      prevList.includes(option)
        ? prevList.filter((item: any) => item !== option)
        : [...prevList, option]
    );
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const finalData: any = {
      states: location?.state || location?.regionName || pathname || "NA",
      cities: location?.city || city || "NA",
      type: list,
      message: "Call me",
      email: "verificationpending@test.com",
      ...data,
    };

    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (response.headers.get("Content-Type")?.includes("application/json")) {
        const result = await response.json();
        setShowFlyOut(false);
        store.dispatch(setShowForm(false));
        setShowSidebar(false);
        submit();
        setIsSubmitted(true);
        store.dispatch(setFormSubmitted(true));
        window.location.reload();
      } else {
        const text = await response.text();
        throw new Error("Unexpected response format");
      }
    } catch (error: any) {
      console.error("Error while submitting:", error.message || error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="max-w-md w-full bg-green-50 text-center p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>
          <p className="text-gray-600 mt-4">
            We’ve received your enquiry. Our team will get in touch soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-[90%] md:w-[50%] mx-auto mt-10 md:mt-20 bg-white   shadow-2xl p-3 md:p-8 transition-all duration-700"
    >
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-primary to-red-600">
          Need Guidance? Choose Your Exam
        </h2>
        {pathname !== "/contactus" && (
          <button
            onClick={() => {
              setShowSidebar(false);
              store.dispatch(setShowForm(false));
            }}
            className="text-gray-600 hover:text-red-500"
          >
            <CgClose className="w-5 h-5" />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Course(s)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {jdata?.courses?.map((option: any, index: any) => (
              <label
                key={index}
                className="flex items-center bg-gray-100 px-3 py-2 rounded-lg cursor-pointer shadow-sm hover:bg-gray-200"
              >
                <input
                  type="checkbox"
                  name="coaching"
                  value={option?.id}
                  onChange={(e) => handleChange(e?.target?.value)}
                  className="form-checkbox h-4 w-4 text-purple-600"
                />
                <span className="ml-3 text-sm text-gray-800 capitalize">
                  {option?.title?.replaceAll("{location}", "")}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your Phone Number"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-red-600 text-white py-2 rounded-lg font-semibold hover:from-purple-500 hover:to-indigo-600 transition-all duration-300"
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}
