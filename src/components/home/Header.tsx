/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { assets } from "@/app/constants/Appasets";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import jdata from "../../components/data/Jdata.json";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.05;
      setScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  return (
    <div className="relative">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-white py-1 text-center font-baskervville text-sm">
        Join the best Sainik school coaching
      </div>

      {/* Main Header Section */}
      <div
        className={`fixed w-full z-50 bg-white shadow-md transition-transform duration-300 ${
          scrolled ? "-translate-y-10" : ""
        }`}
      >
        {/* Header Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 space-y-3 md:space-y-0">
          {/* Search (Top on mobile, Left on desktop) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="flex items-center border-b border-primary w-full max-w-md">
              <input
                type="text"
                className="w-full py-1 px-2 placeholder-primary text-sm focus:outline-none"
                placeholder="Search courses"
              />
              <BiSearch
                className="text-primary cursor-pointer hover:text-secondary"
                size={20}
              />
            </div>
          </div>

          {/* Logo (Center) */}

          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src={assets.logo}
              alt="Royal Defence Academy"
              width={50}
              height={50}
              className="w-12 md:w-16"
            />
            <div className="tracking-wide text-primary text-center">
              <span className="text-2xl md:text-3xl font-bold font-playfair">
                Royal
              </span>
              <br />
              <span className="text-sm md:text-lg font-semibold">
                Defence Academy
              </span>
            </div>
            <div className="md:hidden block">
              {" "}
              <Navbar />
            </div>
          </div>

          {/* Social Icons (Bottom on mobile, Right on desktop) */}
          <div className="w-full md:w-1/3 hidden md:flex justify-center md:justify-end gap-4">
            <Link href={jdata.contact_info.facebook_link} target="_blank">
              <FaFacebook
                className="text-primary hover:text-secondary"
                size={20}
              />
            </Link>
            <Link href={jdata.contact_info.instagram_link} target="_blank">
              <BsInstagram
                className="text-primary hover:text-secondary"
                size={20}
              />
            </Link>
            <Link href={jdata.contact_info.youtube_link} target="_blank">
              <FaYoutube
                className="text-primary hover:text-secondary"
                size={20}
              />
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="md:block hidden">
          {" "}
          <Navbar />
        </div>
      </div>
    </div>
  );
}
