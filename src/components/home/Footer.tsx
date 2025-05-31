/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import jdata from "../../components/data/Jdata.json";
export default function Footer() {
  return (
    <footer className="bg-primary text-white pb-10">
      <div className="bg-primary h-2 mb-10 bg-gradient-to-b from-secondary to-primary"></div>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm text-gray-300">
            We provide high-quality courses designed to help you grow and
            succeed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="courses" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="about-us" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href={jdata.contact_info.facebook_link}
              target="__blank"
              className="text-white hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={jdata.contact_info.instagram_link}
              target="__blank"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={jdata.contact_info.contact_number}
              target="__blank"
              className="text-white hover:text-green-500"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">
            Address: Major Bane Singh Colony, Khatipura, Jaipur
          </p>
          <p className="text-sm text-gray-300">Phone: 8278640248</p>
          <p className="text-sm text-gray-300">WhatsApp: 8278640248</p>
          <p className="text-sm text-gray-300">Email: support@example.com</p>
          <a
            href="tel:8278640248"
            className="inline-block mt-2 bg-white text-[#6b0804] px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
