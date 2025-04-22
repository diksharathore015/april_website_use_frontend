"use client";
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

export default function Reviews({ reviewData , locationdata}: any) {
  return (
    <div className="p-6 bg-gray-50">
      <div className="space-y-6">
        {reviewData.map((review: any) => (
          <div
            key={review.id}
            className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Royal Defence Academy
                </h2>
              </div>
              <p className="text-sm text-gray-500">
                {review.created_at &&
                  new Date(review.created_at).toLocaleDateString()}
              </p>
            </div>

            {/* Rating */}
            <div className="mt-2">
              <span className="text-yellow-500 text-lg">
                {"⭐".repeat(review.rating)}
              </span>
            </div>

            {/* Review Content */}
            <p className="mt-2 text-gray-800">
              {review.content.replaceAll(/{location}|{Location}/g, locationdata.title || "India")}
            </p>

            {/* Footer */}

            {/* Social Links */}
            {review.student.map((student: any) => (
              <div key={student.id} className="mt-4">
                <div className="flex items-center space-x-4">
                  {student.image.map((img: any) => (
                    <Image
                      key={img.id}
                      src={img.file}
                      alt={img.alternative_test || "Student image"}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  ))}
                  <div>
                    <h3 className="font-medium text-gray-700">
                      {student.name}
                    </h3>
                    <p className="text-sm text-gray-600">{student.detail}</p>
                  </div>
                </div>
                <div className="mt-2 flex space-x-4">
                  {student.youtube_link && (
                    <a
                      href={student.youtube_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      YouTube
                    </a>
                  )}
                  {student.facebook_link && (
                    <a
                      href={student.facebook_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Facebook
                    </a>
                  )}
                  {student.instagram_link && (
                    <a
                      href={student.instagram_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
