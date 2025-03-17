import React from "react";
import Image from "next/image";
import aboutus from "../../../public/images/About/about.png";
import Ourmission from "./ourmission";
import Offer from "./offer";
import Getintouch from "./getintouch";

const Aboutus = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-[#F3F4F6] ">
      <div className="md:mx-24 mx-2">
        <div className="text-[24px] font-semibold md:text-[48px] ">
          About Us
        </div>
        <div className=" md:text-[20px] text-[14px] font-medium md:mt-4 mt-2">
          A World of Stories, Knowledge, and Imagination{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
          <div>
            <Image
              src={aboutus}
              alt="aboutus"
              className="mt-6 w-[358px] h-[364px] md:w-[411px] md:h-[418px]"
            />{" "}
          </div>

          <div className="flex flex-col  justify-center md:col-span-2 ">
            <div className="text-[24px] md:text-[48px] font-semibold ">
              Who We Are
            </div>
            <div className="mt-4 text-[14px] md:text-[20px] ">
              We are an innovative online library platform designed to bring
              stories, knowledge, and learning to readers worldwide. Whether you
              love flipping through PDF books, immersing yourself in audiobooks,
              or engaging with video books, we provide a seamless experience
              tailored to your reading style.
            </div>
          </div>
        </div>
      </div>
      <Ourmission />
      <Offer />
      <Getintouch />
    </div>
  );
};

export default Aboutus;
