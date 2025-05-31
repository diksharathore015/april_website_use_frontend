import EnquiryForm from "@/components/home/EnquiryForm";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full mt-16 bg-gray-100 flex flex-col items-center py-10">
        <div className="bg-white w-full shadow-lg rounded-2xl p-8 ">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-8">
            We’d love to hear from you! Please fill out the form below or use
            the provided contact details to get in touch with us.
          </p>
          <div className="flex justify-center ">
            <div className="w-full flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> Royal Defence Academy, Major Bane
                Singh Colony Khatipura Jaipur
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong>
                8278640248
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> royaldefenceacademyjaipur@gmail.com
              </p>
              <p className="text-gray-600">
                <strong>Working Hours:</strong> Monday to Saturday, 8:00 AM -
                8:00 PM
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
             
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
