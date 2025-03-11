"use client";
import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { CiHeart, CiSettings, CiSearch } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

 
  const dropdownItems = useMemo(() => [
    { id: "1", name: "Reading List", route: "/pages/Ebooks", icon: <CiHeart className="w-5 h-5 mr-2" /> },
    { id: "2", name: "Your Accounts", route: "/", icon: <CiSettings className="w-5 h-5 mr-2" /> },
    { id: "3", name: "Sign out", route: "/", icon: <MdOutlineLogout className="w-5 h-5 mr-2" /> },
  ], []);

  
  const toggleDropdown = useCallback(() => setDropdownOpen(prev => !prev), []);
  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);
  const toggleResources = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <div className="relative flex items-center justify-between px-4 py-4 md:px-16 bg-[#FBFBFB]">
      {/* Sidebar button */}
      <button className="md:hidden text-2xl cursor-pointer" onClick={toggleSidebar}>
        <FaBarsStaggered />
      </button>

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Logo */}
      <Link href="/" className="md:text-2xl text-xl font-bold">
        BookScape
      </Link>

      {/* Search bar  */}
      <div className="hidden md:flex items-center w-[519px] border-2 rounded-md">
        <input type="text" placeholder="Search" className="w-full h-10 border-none pl-4" />
        <button className="p-2 text-gray-400">
          <CiSearch />
        </button>
      </div>

      {/* Dropdown for resources */}
      <div className="relative">
        <button onClick={toggleResources} className="text-black px-4 py-2 bg-[#FBFBFB] rounded-md md:block hidden">
          Resources ▼
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md">
            <ul className="py-2 text-gray-800">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/pages/AboutUs">About Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/pages/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* User dropdown */}
      <div className="relative flex items-center gap-4">
        <button className="text-white px-4 py-2 bg-[#0D47A1] rounded-md hidden md:block">
          Switch to Publisher
        </button>

        <div className="relative cursor-pointer" onClick={toggleDropdown}>
          <Image
            src="/Icons/user.png"
            alt="user"
            width={40} height={40} 
            className="w-10 h-10 rounded-full"
            priority 
          />

          {dropdownOpen && (
            <div className="absolute top-12 left-0 mt-2 w-[200px] bg-white shadow-md rounded-md border p-2">
              <div className="font-semibold text-gray-800 mb-2">Hello Alex!</div>
              {dropdownItems.map((item) => (
                <Link key={item.id} href={item.route}>
                  <div className="flex items-center gap-6 text-gray-600 hover:bg-blue-100 hover:text-blue-600 cursor-pointer py-2 px-4">
                    {item.icon}
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Authentication buttons */}
      <div className="hidden md:flex gap-4">
        <Link href="/login">
          <button className="text-black w-[123px] h-[48px] bg-[#FBFBFB] border rounded-md">
            Sign in
          </button>
        </Link>
        <Link href="/pages/register">
          <button className="text-white w-[123px] h-[48px] bg-[#0D47A1] rounded-md">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
