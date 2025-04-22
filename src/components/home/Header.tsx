/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { assets } from "@/app/constants/Appasets";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Navbar from "./Navbar";


export default function Header({courses}:any) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.05; // 20% of screen height
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="bg-primary text-white py-1 w-full text-center font-baskervville">
        Join best Sainik school coaching
      </div>
      <div
        className={`fixed w-full z-50 bg-white transition-all duration-300 ${
          scrolled ? "-mt-10" : ""
        }`}
      >
        <div className="w-full pb-4 flex justify-between items-center">
          <div className="px-3 flex items-end justify-start w-1/3">
            <div className="flex border-b border-primary w-fit">
              <input
                type="text"
                className=" placeholder-primary"
                placeholder="Search course"
              />
              <BiSearch className="text-primary mb-1 hover:cursor-pointer" />
            </div>
          </div>
          <div className="w-1/3 flex justify-center">
            <div className="mx-auto flex justify-center">
              <Image
                src={assets.logo}
                alt="Royal Defence Academy"
                width={60}
                height={60}
                className="w-20"
              />
              <div className="mt-3 tracking-wider font-bold font-playfair text-primary">
                <span className="text-5xl tracking-wider font-bold font-playfair mt-4">
                  Royal
                </span>
                <br /> Defence Academy
              </div>
            </div>
          </div>
          <div className="w-1/3 flex justify-end gap-0 text-secondary">
            <FaFacebook className="text-primary w-10 h-5" />
            <BsInstagram className="text-primary w-10 h-5" />
            <FaXTwitter className="text-primary w-10 h-5" />
            <FaYoutube className="text-primary w-10 h-5" />
          </div>
        </div>
        <Navbar courses={courses} />
      </div>
    </div>
  );
}
