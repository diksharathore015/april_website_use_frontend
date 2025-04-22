/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

const ImageGrid = ({ images }: any) => {
  // Ensure there are enough images by repeating if needed
  const repeatedImages =
    images.length < 6
      ? [
          ...images,
          ...images.slice(0, 6 - images.length),
          ...images.slice(0, 3),
        ]
      : images;

  return (
    <div className="grid grid-rows-2 gap-2 p-4">
      {/* Top row */}
      <div className="grid grid-cols-5 gap-2 h-[20vh]">
        {/* Large logo */}
        <div className="col-span-2 overflow-hidden shadow">
          <Image
            src={repeatedImages[0].file}
            alt={repeatedImages[0].alternative_text || "Image"}
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
        </div>
        {/* Centerpiece image */}
        <div className="col-span-3 overflow-hidden shadow">
          <Image
            src={repeatedImages[1].file}
            alt={repeatedImages[1].alternative_text || "Image"}
            width={600}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-5 gap-2 h-[20vh]">
        {/* Smaller images */}
        {repeatedImages.slice(2, 7).map((img: any, index: any) => (
          <div key={index} className="col-span-1 overflow-hidden shadow">
            <Image
              src={img.file}
              alt={img.alternative_text || "Image"}
              width={300}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
