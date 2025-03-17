import React from "react";
import Image from "next/image";
import contact from "../../../public/images/Contact/Contact.png";

const Contactus = () => {
  return (
    <div className="md:mx-24 mx-2">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:mt-10 mt-6">
        <div className="flex items-center justify-center">
          <Image
            src={contact}
            alt="contact"
            className="w-[358px] h-[437px] md:w-[568px] md:h-[694px]"
          />
        </div>

        <div className="flex flex-col md:space-y-6 space-y-2 md:mt-16 mt-8">
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2  text-[12px] md:text-[16px]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="Full Name"
              className="w-full md:w-[603px] h-[29px] text-[10px] md:text-[14px] md:h-[42px] px-4 py-2 border border-gray-400 bg-[#18181805] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2  text-[12px] md:text-[16px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full md:w-[603px] h-[29px] md:h-[42px] text-[10px] md:text-[14px] px-4 py-2 border border-gray-400 bg-[#18181805] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2  text-[12px] md:text-[16px]"
            >
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              placeholder="Subject"
              className="w-full md:w-[603px] h-[29px] md:h-[42px] text-[10px] md:text-[14px] px-4 py-2 border border-gray-400 bg-[#18181805] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2 text-[12px] md:text-[16px]"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="w-full md:w-[603px] md:h-[160px] h-[99px] text-[10px] md:text-[14px] px-4 py-2 border border-gray-400 bg-[#18181805] rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-[603px] h-[46px] bg-[#0D47A1] text-white font-medium rounded-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
