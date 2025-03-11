import React from "react";
import Image from "next/image";
import book from "../../../public/images/Home/HomeBook.png";
import Ebook from "../../../public/icons/Ebook.png";
import Abook from "../../../public/icons/Abook.png";
import Vbook from "../../../public/icons/Vbook.png";
import Home1 from "./home1";
import Home2 from "./home2";

const bookTypes = [
  { img: Ebook, title: "E-Books", description: "Read anytime, anywhere!" },
  { img: Abook, title: "Audiobooks", description: "Listen on the go!" },
  {
    img: Vbook,
    title: "Video Books",
    description: "Watch stories come to life!",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-28 items-center gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4 text-[28px] md:text-[64px] font-semibold">
          <p>Unlock Knowledge, Anytime, Anywhere!</p>
          <p className="text-[14px] md:text-[20px] font-normal">
            Discover a collection of free books or get unlimited access to
            exclusive e-books, audiobooks, and video books with our premium
            membership.
          </p>
          <div className="text-[#FBFBFB] text-[12px] md:text-[20px]">
            <button className="bg-[#0D47A1] w-[135px] h-[30px] md:w-[235px] md:h-[48px] font-semibold rounded-lg">
              Become a Member
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center w-full h-full relative">
          <Image src={book} alt="book" className="w-full h-auto" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end text-white">
            {bookTypes.map((book, index) => (
              <div
                key={index}
                className="w-[335px] h-[72px] bg-[#E9EAEB] mb-4 md:block hidden rounded-2xl p-2 ml-[-3rem] flex-col justify-center items-end"
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-black font-medium">
                    <Image src={book.img} alt={book.title} />
                  </span>
                  <div className="text-[#181818] flex flex-col items-end text-right">
                    <span className="font-semibold">{book.title}</span>
                    <span className="text-sm">{book.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Home1 />
      <Home2 />
    </div>
  );
};

export default Home;
