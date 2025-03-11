import React from "react";
import { BsFillMicFill } from "react-icons/bs";
import { IoIosUnlock } from "react-icons/io";
import { FaJetFighterUp } from "react-icons/fa6";

const Ourmission = () => {
  const card = [
    {
      icon: <BsFillMicFill className="text-[#0D47A1] w-[32px] h-[32px] " />,
      topic: "Anytime, Anywhere Access",
      sub: "Read on any device, wherever you are.",
    },
    {
      icon: <IoIosUnlock className="text-[#0D47A1] w-[32px] h-[32px]" />,
      topic: "Limitless Learning & Entertainment",
      sub: "Discover new stories & expand your knowledge.",
    },
    {
      icon: <FaJetFighterUp className="text-[#0D47A1] w-[32px] h-[32px]" />,
      topic: "A Seamless, User-Friendly Experience",
      sub: "Enjoy an intuitive, easy-to-use platform.",
    },
  ];

  return (
    <div>
      {/* Mission Section */}
      <div className="w-full h-[277px] md:h-[338px] bg-[#0D47A1] flex items-center justify-center mt-6 md:mt-10">
        <div className="flex flex-col items-center text-center container mx-auto">
          <div className="text-[24px] md:text-[48px] text-[#FBFBFB] font-bold">
            Our Mission
          </div>
          <div className="text-[14px] md:text-[20px] text-[#FBFBFB] mt-4 font-medium">
            To empower readers and authors by offering a diverse and accessible
            digital library, where knowledge and creativity have no limits.
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="md:mx-24 mx-2 mt-8">
        <div className="text-[24px] md:text-[48px] font-semibold text-start">
          Why Choose Us?
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {card.map((item, index) => (
            <div
              key={index}
              className="w-full h-[196px] md:w-full md:h-[196px] p-4 bg-[#ECF9FF] rounded-lg shadow-md flex flex-col items-start justify-center text-start"
            >
              <div className="mb-4">{item.icon}</div>
              <div className="text-[20px] md:text-[20px] font-semibold ">
                {item.topic}
              </div>
              <div className="text-[16px] md:text-[16px] text-gray-700">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourmission;
