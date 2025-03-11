import React from "react";
import Image from "next/image";
import books from "../../../public/images/Home/Bookset.png";

const Getintouch = () => {
  return (
    <div className="md:mx-24 mx-2">
      <div className="w-full md:h-[353px] h-[163px] bg-[#D5EFFF] md:mt-16 mt-10 flex items-center justify-center">
        <div className="grid grid-cols-4 md:grid-cols-4 w-full">
          <div className="col-span-2 flex flex-col items-start ml-4 justify-start md:items-start md:justify-center md:ml-10">
            <div className="text-[18px] md:text-[48px] font-semibold text-start md:text-start">
              We’d Love to Hear From You!
            </div>

            <div className="text-[10px] md:text-[20px] text-start md:text-center mt-2">
              Have a question, feedback, or need support? Reach out to us—
              <span className="md:flex md:text-start">we’re here to help!</span>
              <div className="">
                <button className="flex items-center justify-center md:w-[172px] md:h-[48px] w-[135px] h-[30px] bg-[#0D47A1] rounded-lg mt-2 text-white font-medium">
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex md:items-center md:justify-center">
            <Image
              src={books}
              alt="books"
              className="-mt-6 w-[170px] h-[142px] md:w-[504px] md:h-[421px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
