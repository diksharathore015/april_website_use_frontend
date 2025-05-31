/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

import Jdata from "../data/Jdata.json";
export default function Navbar({}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const courses = Jdata.courses;
  console.log("testcoursedata", courses);
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Courses",
      link: "/courses", // Link for Courses
      submenu: courses,
    },
    { name: "Contact", link: "/contact" },
    { name: "About Us", link: "/about-us" },
  ];

  return (
    <nav className="bg-white  w-full top z-50">
      <div className="flex justify-center mx-auto px-4">
        <div className="flex justify-between items-center pb-2">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && setIsCoursesOpen(true)} // Show submenu on hover
                onMouseLeave={() => item.submenu && setIsCoursesOpen(false)} // Hide submenu when hover ends
              >
                <Link
                  href={item.link}
                  className="px-4 py-1 text-primary font-extrabold    text-2xl hover:text-white hover:bg-primary rounded-lg transition"
                >
                  {item.name}
                </Link>
                {/* Submenu for "Courses" */}
                {item.submenu && isCoursesOpen && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
                    {item.submenu.map((subItem: any, subIndex: any) => (
                      <Link
                        key={subIndex}
                        target="_blank"
                        href={`/courses/${subItem.slug}`}
                        className=" block px-4 w-52 border-b py-2 text-primary  hover:bg-primary hover:text-white transition "
                      >
                        {subItem.title.replaceAll(/{location}|{Location}/g, "")}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CgClose size={32} /> : <BiMenu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[99999]">
            <div className="absolute top-0 right-0 w-64 bg-white h-full shadow-lg flex flex-col items-center py-10 space-y-6">
              <button
                className="absolute top-4 right-4 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <CgClose size={32} />
              </button>
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  <Link
                    target="_blank"
                    href={item.link}
                    className="px-4 py-1 text-gray-700 hover:text-white hover:bg-primary rounded-lg transition"
                    onClick={() =>
                      item.submenu && setIsCoursesOpen(!isCoursesOpen)
                    }
                  >
                    {item.name}
                  </Link>
                  {/* Submenu for "Courses" */}
                  {item.submenu && isCoursesOpen && (
                    <div className="absolute z-[999] w-36 left-0 mt-2 bg-white shadow-lg rounded-lg">
                      {item.submenu.map((subItem: any, subIndex: any) => (
                        <Link
                          key={subIndex}
                          target="_blank"
                          href={`/courses/${subItem.slug}`}
                          className="block px-4 py-2 text-primary hover:bg-primary hover:text-white transition"
                        >
                          {subItem.title.replaceAll(
                            /{location}|{Location}/g,
                            ""
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
