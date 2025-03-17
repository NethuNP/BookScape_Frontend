"use client";

import React, { useState } from "react";
import BooksList from "@/Components/BookList/bookList";
import CategoryBar from "./CategoryBar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <CategoryBar/>
      {children}
    </div>
  );
};

export default ClientLayout;