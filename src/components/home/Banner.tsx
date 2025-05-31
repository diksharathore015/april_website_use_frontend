/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import MainSlider from "../UI/MainSlider";
import { assets } from "@/app/constants/Appasets";

export default function Banner({}: any) {
  const data = [
    {
      id: 10,
      title: "Royal Defence Academy",
      image: [
        {
          id: 8,
          alternative_test: "alternative_test",
          title: "title",
          caption: "caption",
          description: "description",
          file: assets.b1,
          size: 18272,
          size_readable: "17.84 KB",
          url: null,
          course: [],
        },
      ],
    },
    {
      id: 11,
      title: "Royal Defence Academy",
      image: [
        {
          id: 7,
          alternative_test: "alternative_test",
          title: "title",
          caption: "caption",
          description: "description",
          file: assets.b2,
          size: 6487,
          size_readable: "6.33 KB",
          url: null,
          course: [],
        },
      ],
    },
    {
      id: 12,
      title: "Royal Defence Academy",
      image: [
        {
          id: 10,
          alternative_test: "alternative_test",
          title: "title",
          caption: "caption",
          description: "description",
          file: assets.b3,
          size: 17768,
          size_readable: "17.35 KB",
          url: null,
          course: [],
        },
      ],
    },
    {
      id: 13,
      title: "Royal Defence Academy",
      image: [
        {
          id: 9,
          alternative_test: "alternative_test",
          title: "title",
          caption: "caption",
          description: "description",
          file: assets.b1,
          size: 530567,
          size_readable: "518.13 KB",
          url: null,
          course: [],
        },
      ],
    },
  ];
  return (
    <div className="mt-36">
      <MainSlider
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
          {
            breakpoint: 400,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
          {
            breakpoint: 400,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
        ]}
        slides={data.map((item: any, i: number) => (
          <div
            key={i}
            className="flex justify-center md:h-[60vh]  items-center w-full my-1 md:my-4  "
          >
            <Image
              alt="img"
              src={item.image[0].file}
              className="w-full bg-cover md:h-[60vh]"
              width={1950}
              height={800}
            />
          </div>
        ))}
        slidesToScroll={1}
        slidesToShow={1}
        autoplay={true}
        infinite={true}
        autoplaySpeed={1500}
      />
    </div>
  );
}
