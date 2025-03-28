import React from "react";
import { GrGithub, GrLinkedinOption, GrMail, GrPhone } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4">
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/soumya-rayast-075430217/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-green-400 transition duration-300"
          aria-label="LinkedIn Profile"
        >
          <div className="h-10 w-10 rounded-full flex justify-center items-center bg-green-600">
            <GrLinkedinOption className="text-white text-lg" />
          </div>
          <span className="text-sm">Soumya Rayast</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/soumya-rayast"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-green-400 transition duration-300"
          aria-label="GitHub Profile"
        >
          <div className="h-10 w-10 rounded-full flex justify-center items-center bg-green-600">
            <GrGithub className="text-white text-lg" />
          </div>
          <span className="text-sm">soumya-rayast</span>
        </a>

        {/* Phone */}
        <a
          href="tel:79098XXXX"
          className="flex items-center space-x-2 text-white hover:text-green-400 transition duration-300"
          aria-label="Phone Number"
        >
          <div className="h-10 w-10 rounded-full flex justify-center items-center bg-green-600">
            <GrPhone className="text-white text-lg" />
          </div>
          <span className="text-sm">79098XXXX</span>
        </a>

        {/* Email */}
        <a
          href="mailto:rayastsoumya@gmail.com"
          className="flex items-center space-x-2 text-white hover:text-green-400 transition duration-300"
          aria-label="Email"
        >
          <div className="h-10 w-10 rounded-full flex justify-center items-center bg-green-600">
            <GrMail className="text-white text-lg" />
          </div>
          <span className="text-sm">rayastsoumya@gmail.com</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
