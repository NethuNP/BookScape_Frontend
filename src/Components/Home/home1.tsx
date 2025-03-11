import React from "react";
import Image from "next/image";
import Book from "../../../public/images/Home/SampleBook.png";

const Home1 = () => {
  const books = [
    {
      id: 1,
      img: Book,
      title: "The Great Gatsby",
      author: "Francisco Carpenter",
    },
    {
      id: 2,
      img: Book,
      title: "The Great Gatsby",
      author: "Francisco Carpenter",
    },
    {
      id: 3,
      img: Book,
      title: "The Great Gatsby",
      author: "Francisco Carpenter",
    },
    {
      id: 4,
      img: Book,
      title: "The Great Gatsby",
      author: "Francisco Carpenter",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
        <div>
          <div className="text-[24px] md:text-[48px] font-semibold">
            Read for Free <br /> Get a Taste of Our Library!
          </div>
          <div className="text-[14px] md:text-[20px]">
            Enjoy a selection of free books before unlocking our full library
            with a membership.
          </div>
        </div>
        <div className="flex md:items-end md:justify-end">
          <button className="w-[137px] h-[30px] md:w-[239px] md:h-[48px] bg-[#0D47A1] text-[#FBFBFB] text-[12px] md:text-[20px] rounded-lg mt-4">
            Explore More Books
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">
        {books.map((book) => (
          <div key={book.id} className="flex items-center gap-4">
            <div className="relative w-[100px] h-[150px]">
              <Image
                src={book.img}
                alt={book.title}
                width={100}
                height={150}
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-black text-[16px] md:text-[20px] font-semibold">
                {book.title}
              </span>
              <span className="md:font-[16px] text-[#18181899] font-medium">
                {book.author}
              </span>
              <button className="w-[83px] h-[31px] border border-[#0D47A1] text-[12px] text-[#0D47A1] rounded-lg mt-6">
                Read Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home1;
