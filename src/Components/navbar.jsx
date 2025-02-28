"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className=" flex flex-col text-2xl font-bold text-gray-900">
            <Link href="/">
              <div className="flex flex-col h-20 w-20 ">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <p className="mt-4">✈️</p>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/Status" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/Form" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link
              to="/PackingList"
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link
            href="/Status"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/Form"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/PackingList"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
