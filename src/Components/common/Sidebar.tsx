import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { CiHeart, CiSettings } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  const [resourceOpen, setResourceOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const router = useRouter();

  const sidebarMenu = [
    {
      id: "1",
      name: "Reading List",
      href: "/pages/Ebooks",
      icon: (
        <CiHeart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mr-2" />
      ),
    },
    {
      id: "2",
      name: "Your Accounts",
      href: "/",
      icon: (
        <CiSettings className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mr-2" />
      ),
    },
    {
      id: "3",
      name: "Sign out",
      href: "/",
      icon: (
        <MdOutlineLogout className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mr-2" />
      ),
    },
  ];

  const resourcesMenu = [
    { id: "1", name: "About Us", href: "/" },
    { id: "2", name: "Contact Us", href: "/signup/author" },
  ];

  const categoryMenu = [
    { id: "1", name: "Fiction", href: "/" },
    { id: "2", name: "Non-Fiction", href: "/" },
    { id: "3", name: "Educational", href: "/" },
    { id: "4", name: "Children’s Books", href: "/" },
    { id: "5", name: "Special Interest", href: "/" },
    { id: "6", name: "Other", href: "/" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[216px] bg-[#FBFBFB] shadow-lg transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4">
        <span className="text-xl font-medium text-[14px]"> Hello Alex!</span>
        <button onClick={toggleSidebar}>
          <FaTimes className="text-2xl" />
        </button>
      </div>

      <ul className="p-4 space-y-4">
        {sidebarMenu.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded flex items-center text-[12px]"
            onClick={() => router.push(item.href)}
          >
            {item.icon}
            {item.name}
          </li>
        ))}

        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded flex justify-between items-center text-[12px]"
          onClick={() => setResourceOpen(!resourceOpen)}
        >
          Resources <FaChevronDown className="ml-2 text-gray-600 " />
        </li>
        {resourceOpen && (
          <ul className="pl-4 space-y-2">
            {resourcesMenu.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer p-2 hover:bg-gray-200 text-[12px]"
                onClick={() => router.push(item.href)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}

        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded flex justify-between items-center text-[12px]"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          Category <FaChevronDown className="ml-2 text-gray-600 text-[12px]" />
        </li>
        {categoryOpen && (
          <ul className="pl-4 space-y-2">
            {categoryMenu.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer p-2 hover:bg-gray-200 text-[12px]"
                onClick={() => router.push(item.href)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </ul>

      <button className="bg-[#0D47A1] text-white w-[187px] py-2 text-[12px] mx-4 rounded-md mt-4">
        Switch to Publisher
      </button>
    </div>
  );
};

export default Sidebar;
