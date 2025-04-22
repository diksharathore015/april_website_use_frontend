/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import MainSlider from "../UI/MainSlider";

export default function Banner({ data }: any) {
  console.log("datadata", data);
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
            className="flex justify-center h-[60vh]  items-center w-full my-1 md:my-4  "
          >
            <Image
              alt="img"
              src={item.image[0].file}
              className="w-full bg-cover h-[60vh]"
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
