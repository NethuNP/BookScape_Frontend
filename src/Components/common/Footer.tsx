import React from "react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  const companyInfo = {
    name: "BookScape",
    tagline: "A World of Stories, One Click Away",
    description:
      "Your trusted platform for digital books. Read, listen, and watch anytime, anywhere.",
    contact: [
      {
        icon: (
          <CiMail className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mr-2" />
        ),
        text: "info@bookscape.com",
      },
      {
        icon: (
          <BsTelephone className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mr-2" />
        ),
        text: "+1 (123) 456-7890",
      },
    ],
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: ["Home", "Publishers/Authors", "About Us", "Contact Us"],
    },
    {
      title: "Categories",
      links: ["Fiction", "Non-Fiction", "Educational", "Children’s Books"],
    },
    {
      title: "",
      links: ["Special Interest", "Other"],
    },
    {
      title: "User Account Links",
      links: ["Saved Books/Reading List", "Become a Publisher"],
    },
  ];

  return (
    <div className="bg-[#0D47A1] text-white p-6 lg:p-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 w-full">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 mx-2 md:mx-6">
          <div className="text-[24px] md:text-[32px] font-bold">
            {companyInfo.name}
          </div>
          <div className="text-[12px] md:text-[16px] font-semibold italic mt-2 opacity-80">
            {companyInfo.tagline}
          </div>
          <div className="text-[12px] md:text-[16px] mt-4 opacity-80">
            {companyInfo.description}
          </div>
          {companyInfo.contact.map((item, index) => (
            <div
              key={index}
              className="flex items-center mt-4 text-[12px] md:text-[16px]"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="">
            <div className="text-[14px] md:text-[20px] font-medium text-[#FFFFFF]  lg:mt-6">
              {section.title}
            </div>
            {section.links.map((link, linkIndex) => (
              <div key={linkIndex} className="text-[14px] md:text-[16px] mt-2">
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <hr className="border-t border-[#FBFBFB] opacity-30 w-full" />
      </div>

      <div className="flex justify-center text-[#FBFBFBCC] mt-4 text-[12px] md:text-[14px] text-center">
        © 2025 BookScape. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
