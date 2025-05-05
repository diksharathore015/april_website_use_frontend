/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

import Jdata from "../data/Jdata.json";
import LineSkeleton from "../UI/LineSkeleton";

export default function Breadcrumbs({
  location = "india",
  imagearr,
  title,
  coursepagemetatitle = "sainik school coaching",
  coursemaintitle = "_",
}: any) {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean); // remove empty values from beginning
  const imagearray = imagearr?.slice(0, 4) || [];

  // Breadcrumb schema list generation
  const breadcrumbList2 = [
    {
      "@type": "ListItem",
      position: 1,
      name: Jdata?.home?.title?.replaceAll("-", " ") || "Home",
      item: "https://www.royaldefenceacademy.com/",
      image: imagearray[0]?.image || "",
    },
    ...(segments[0] !== "course"
      ? [
          {
            "@type": "ListItem",
            position: 2,
            name: coursepagemetatitle?.replaceAll("-", " ") || "Courses",
            item: "https://www.royaldefenceacademy.com/course",
            image: imagearray[1]?.image || "",
          },
        ]
      : []),
    ...segments.map((segment, index) => {
      const isLast = index === segments.length - 1;
      const name = isLast
        ? coursemaintitle?.replaceAll(
            /(?:\{location\}|\{Location\}|\{royal defence \})/g,
            location
          )
        : decodeURIComponent(segment.replaceAll("-", " "));

      return {
        "@type": "ListItem",
        position: segments[0] !== "course" ? index + 3 : index + 2,
        name,
        item: `https://www.royaldefenceacademy.com/${segments
          .slice(0, index + 1)
          .join("/")}`,
        image: imagearray[index + 2]?.image || "",
      };
    }),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbList2,
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {show ? (
        <div className="w-full md:w-[98%] mx-auto mt-4 md:ml-8 bg-gray-100 px-2 md:py-1">
          <nav className="inline items-center text-gray-700 text-xs md:text-sm">
            <a
              href="/"
              hrefLang="en"
              className="text-blue-600 hover:text-blue-800 hover:underline font-semibold capitalize"
            >
              {Jdata?.home?.title || "Home"}
            </a>

            {segments[0] !== "course" && (
              <>
                <FaChevronRight className="inline text-blue-700 px-1 text-xs" />
                <a
                  href="/courses"
                  hrefLang="en"
                  className="text-blue-600 hover:text-blue-800 hover:underline font-semibold capitalize"
                >
                  {coursepagemetatitle}
                </a>
              </>
            )}

            {/* If only `/course` */}
            {segments.length === 1 && segments[0] === "course" && (
              <>
                <FaChevronRight className="inline text-blue-700 px-1 text-xs" />
                <span className="text-blue-600 font-semibold capitalize">
                  Course
                </span>
              </>
            )}

            {/* Render dynamic breadcrumb segments */}
            {segments.length > 0 && (
              <>
                <FaChevronRight className="inline text-blue-700 px-1 text-xs" />
                <a
                  href={`/${segments.join("/")}`}
                  hrefLang="en"
                  className="text-blue-600 hover:text-blue-800 hover:underline font-semibold capitalize"
                >
                  {title ||
                    coursemaintitle?.replaceAll(
                      /(?:\{location\}|\{Location\}|\{royal defence \})/g,
                      location.title
                    )}
                </a>
              </>
            )}

            {segments.length > 0 && (
              <>
                <FaChevronRight className="inline text-blue-700 px-1 text-xs" />
                <a
                  href={`/${segments.join("/")}`}
                  hrefLang="en"
                  className="text-blue-600 hover:text-blue-800  hover:underline font-semibold capitalize"
                >
                  {title ||
                    coursemaintitle?.replaceAll(
                      /(?:\{location\}|\{Location\}|\{royal defence \})/g,
                      location.title
                    )}
                  {location.title}
                </a>
              </>
            )}
          </nav>
        </div>
      ) : (
        <LineSkeleton />
      )}
    </>
  );
}
