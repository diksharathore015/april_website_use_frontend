"use client";
import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  faqs: FAQItem[];
}
import Jdata from "../data/Jdata.json";

const FAQ: React.FC<FAQProps> = ({}) => {
  // Track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Toggle the answer visibility on click
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ul className="list-disc list-inside text-gray-600 max-w-full px-10 mx-auto space-y-4 py-3">
      {Jdata.faqs.map((item, i) => (
        <div key={i} className="space-y-2">
          <div
            className="font-semibold text-lg cursor-pointer w-full flex items-center justify-between border-b-2 capitalize "
            onClick={() => handleToggle(i)} // Toggle visibility on click
          >
            {item.question} <BiDownArrow />
          </div>
          {expandedIndex === i && ( // Only show the answer if this FAQ is expanded
            <div>{item.answer}</div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default FAQ;
