import React from 'react';
import profile2 from "../assets/profile2.png";

const Banner = () => {
  return (
    <div className="mt-28" id="banner">
      {/* inner banner */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 flex flex-col sm:flex-row gap-6 items-center">
        <div className="text-center sm:text-left">
          <h2 className="font-bold text-4xl">Hello, I'm Kishooreraja</h2>
          <h2 className="font-bold text-4xl mt-1 gradiant-text running-text">
            Web Developer
          </h2>
          <p className="mt-4 text-gray-400">
          Creative, detail-oriented Full Stack Developer specializing in the MERN stack, building responsive layouts, dynamic web apps, and seamless user experiences.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start gap-4">
            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1CwVHhYB8Z-bLH9mV0bvONAKF8VFFxZDv/view?usp=sharing" // Updated with Google Drive link
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // For security reasons
              className="border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-500 hover:text-white"
            >
              Download Resume
            </a>
            {/* Contact Button */}
            <a
              href="#contact" // Updated to scroll to the contact section
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="relative mt-8 sm:mt-0">
          <img
            src={profile2}
            alt="profile photo"
            className="relative z-10 w-[220px] m-auto sm:w-[520px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
