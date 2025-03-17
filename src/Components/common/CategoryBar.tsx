"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Fiction" },
  { name: "Non-Fiction" },
  { name: "Educational" },
  { name: "Children’s Books" },
  { name: "Special Interest" },
  { name: "Other" },
];

const CategoryBar: React.FC = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

 const handleCategoryClick = (category: string) => {
  setSelectedCategory(category);
  router.push(`/pages/BookList?category=${category}`);
};

  return (
    <div className="bg-white py-3 rounded-md lg:block hidden">
      <div className="flex items-center justify-center gap-6 text-[16px] font-medium">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition-colors duration-300 ${
              selectedCategory === category.name ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
