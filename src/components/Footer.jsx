import React from "react";

const Footer = () => (
  <div className="bg-gray-900 dark:bg-gray-900 flex flex-col items-center justify-center py-6 px-4 w-full">
    <div className="bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="w-full p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          
          <a href="/" className="hover:underline">
            Sp.SCREENPLAY
          </a>
          .© 2025 {" "} All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
