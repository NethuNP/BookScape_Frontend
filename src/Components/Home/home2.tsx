import React from "react";
import Image from "next/image";
import Book2 from "../../../public/images/Home/Home2.png";
import { IoBookOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { IoFolderOpenOutline } from "react-icons/io5";
import Bookset from "../../../public/images/Home/Bookset.png";

const Home2 = () => {
  const headings = [
    {
      id: 1,
      icon: <IoBookOutline />,
      title: "Unlimited PDFs, audiobooks & video books",
    },
    {
      id: 2,
      icon: <TfiWorld />,
      title: "Seamless access anytime, anywhere",
    },
    {
      id: 3,
      icon: <IoFolderOpenOutline />,
      title: "Create and share your own book collections",
    },
  ];

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image
            src={Book2}
            alt="book"
            layout="intrinsic"
            className="w-[358px] h-[364px] md:w-[628px] md:h-[639px]"
          />
        </div>
        <div>
          <div className="text-[24px] md:text-[48px] font-semibold">
            Enjoy Free E-Books? Unlock Everything!
          </div>
          <div className="text-[16px] md:text-[20px] font-medium text-[#181818B2]">
            Our Library, Unlimited & Unlocked
          </div>

          {headings.map((heading) => (
            <div key={heading.id} className="flex items-center gap-4 mt-4">
              <div className="bg-[#D5EFFF] rounded-full p-4 text-2xl w-[48px] h-[48px]  flex items-center justify-center">
                {heading.icon}
              </div>
              <div className="text-[14px] md:text-[20px] font-medium">
                {heading.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-2 gap-4 bg-[#D5EFFF] w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[18px] md:text-[48px] md:px-10 px-2 mb-4">
            Join Today & Unlock Endless Knowledge!
          </div>

          <button className="bg-[#0D47A1] text-[12px] md:text-[20px] text-white w-[135px] h-[30px] md:w-[235px] md:h-[48px] font-semibold rounded-lg mb-4 ml-4">
            Become a Member
          </button>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={Bookset}
            alt="bookset"
            className="md:w-[504px] md:h-[421px] w-[170px] h-[142px] md:-mt-20 -mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Home2;
