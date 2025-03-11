import React from "react";
import { FaCheck } from "react-icons/fa6";

const Offer = () => {
  return (
    <div className="md:mx-24 mx-2">
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
        <div className="text-[24px] md:text-[48px] font-semibold">
          What We Offer
          <div className="text-[14px] md:text-[20px] font-medium">
            our Library, Unlimited & Unlocked
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 mt-4">
          <div className="flex items-center space-x-4 mt-4">
            <div className="bg-[#D5EFFF] md:w-[48px] md:h-[48px] w-[24px] h-[24px] rounded-full flex justify-center items-center">
              <FaCheck className="md:w-[24px] md:h-[24px] w-[14px] h-[12px]" />
            </div>
            <div className="text-[14px] md:text-[20px] font-medium">
              A Vast Digital Library
              <div className="flex items-start justify-start text-[12px] md:text-[16px]">
                Explore fiction, non-fiction, self-improvement, academics, and
                more.
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#D5EFFF] md:w-[48px] md:h-[48px] w-[24px] h-[24px] rounded-full flex justify-center items-center">
              <FaCheck className="md:w-[24px] md:h-[24px] w-[14px] h-[12px] " />
            </div>
            <div className="text-[14px] md:text-[20px] font-medium">
              Multiple Formats
              <div className="flex items-start justify-start text-[12px] md:text-[16px]">
                Read, listen, or watch with PDFs, audiobooks, and video books.
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-[#D5EFFF] md:w-[48px] md:h-[48px] w-[24px] h-[24px] rounded-full flex justify-center items-center ">
              <FaCheck className="md:w-[24px] md:h-[24px] w-[14px] h-[12px]" />
            </div>
            <div className="text-[14px] md:text-[20px] font-medium">
              Free & Premium Access
              <div className="flex items-start justify-start text-[12px] md:text-[16px]">
                Enjoy select free books or unlock unlimited access with a
                membership.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
