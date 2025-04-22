import React from "react";

const EnquiryBox = () => {
  return (
    <div className="w-full p-4 border   shadow-sm bg-white">
      <p className="text-gray-800 text-sm mb-3">
        Get the list of best{" "}
        <span className="font-semibold text-blue-700">Military Schools</span>
      </p>

      <input
        type="text"
        placeholder="ashish bohara"
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="8947095378"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md font-semibold flex items-center justify-center gap-2">
        Send Enquiry <span className="text-lg">{">>>"}</span>
      </button>
    </div>
  );
};

export default EnquiryBox;
