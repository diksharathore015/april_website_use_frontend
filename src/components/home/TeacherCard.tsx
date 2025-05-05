"use client";
import Image from "next/image";
import React from "react";

interface TeacherCardProps {
  id: number;
  courses: number[];
  name: string;
  subject: string;
  experience: number;
  contact_number: string;
  profile_picture: string;
  bio: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  subject,
  experience,
  contact_number,
  profile_picture,
  bio,
}) => {
  return (
    <div className="max-w-sm mx-auto h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="flex items-center justify-center bg-gray-100 p-4">
 <Image 
              width={200}
              height={200}
          src={profile_picture}
          alt={name}
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm mt-1">{subject}</p>
        <p className="text-gray-700 mt-2 text-sm">
          <span className="font-medium">Experience:</span> {experience} years
        </p>
        <p className="text-gray-700 mt-2 text-sm">
          <span className="font-medium">Contact:</span> {contact_number}
        </p>
        <p className="text-gray-600 mt-4 text-sm line-clamp-4">{bio}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
