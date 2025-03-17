"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Readinglists from "./readinglists"; 

const categories = [
  { id: 1, name: "Ebook" },
  { id: 2, name: "Audio" },
  { id: 3, name: "Video" },
];

const ReadingList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Ebook";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  useEffect(() => {
    if (searchParams.get("category") !== selectedCategory) {
      router.push(`/pages/ReadingList?category=${encodeURIComponent(selectedCategory)}`);
    }
  }, [selectedCategory, router, searchParams]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="text-[32px] font-medium md:mt-6 lg:mx-24 md:block hidden">
        Reading List
      </div>
      <div className="flex items-center justify-center md:items-start md:justify-start lg:mx-24 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex items-center justify-center font-medium w-[83px] h-[31px] md:w-[104px] md:h-[31px] md:mt-6 mt-2 border-2 rounded-lg text-center md:text-[16px] text-[12px] hover:bg-gray-200 cursor-pointer transition-colors duration-300 ${
              selectedCategory === category.name ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </div>
        ))}
      </div>
      <Readinglists selectedCategory={selectedCategory} />
    </div>
  );
};

export default ReadingList;
