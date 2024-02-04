import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaEye } from "react-icons/fa";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 w-full z-50">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-32">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </Button>
          </div>
          <div className="flex justify-center flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg italic font-bold block"
              >
                D'Movies
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex sm:space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-semibold flex items-center"
                >
                  <FaHome className="text-gray-600 mr-2" size={20} />
                  <span>Home</span>
                </Link>

                <Link
                  to="/watchlist"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-bold flex items-center"
                >
                  <FaEye className="text-gray-600 mr-2" size={20} />
                  <span>Watchlist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center w-full"
            >
              <FaHome className="text-gray-600 mr-2" size={20} />
              Home
            </Link>
            <Link
              to="/watchlist"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center w-full"
            >
              <FaEye className="text-gray-600 mr-2" size={20} />
              Watchlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
