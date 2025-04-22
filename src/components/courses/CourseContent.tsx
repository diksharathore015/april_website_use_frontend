/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CourseContent = ({ allCourses }: any) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const isSectionExpanded = (section: string) =>
    expandedSections.includes(section);
  const router = useRouter();
  return (
    <div className="     mx-auto">
      {/* What You'll Learn Section */}
      <div className="mb-2 border border-gray-200 -lg shadow-sm bg-white px-6 py-2">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          What you will learn
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-gray-700">
          <li className="pl-1">
            Complete Intelligence Test Study Pack for Sainik School Entrance
            Exams
          </li>
          <li className="pl-1">
            Sainik School Entrance Exam for Class 6 Intelligence Test
          </li>
          <li className="pl-1">12+ Concept Videos, 100+ Solved Problems</li>
          <li className="pl-1">
            Covers - Verbal, Non-Verbal, and Logical Reasoning
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseContent;
