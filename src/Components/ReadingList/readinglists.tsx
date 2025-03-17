"use client";
import React, { useState, useEffect } from "react";
import FavoriteHeart from "../common/Favourite";
import Image from "next/image";
import { Book } from "@/types/types";
import { BASE_URL } from "@/utils/apiConfig";
import { useGetBooksQuery } from "@/app/Redux/features/bookSlice";

interface ResponseData {
  books: Book[];
  total: number;
}

interface ReadingListsProps {
  selectedCategory: string;
}

const Readinglists: React.FC<ReadingListsProps> = ({ selectedCategory }) => {
  const {
    data:responseData,
    isLoading,
    isError,
  } = useGetBooksQuery<{
      data: ResponseData | undefined;
      isLoading: boolean;
      isError: boolean;
    }>();

  const [currentPage, setCurrentPage] = useState(1);

  const books = responseData?.books || [];

  // Filter books based on selected category and status "Approved"
  const filteredBooks = books.filter(
    (book) => book.status === "Approved" && (!selectedCategory || book.format === selectedCategory )
  );

  // Pagination setup
  const rowsPerPage = 8;
  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / rowsPerPage));
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstRow, indexOfLastRow);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Ensure page number stays within range
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Loading and Error states
  if (isLoading) return <div className="text-center text-gray-500 mt-6">Loading...</div>;
  if (isError) return <div className="text-center text-red-500 mt-6">Error loading books</div>;

  return (
    <div className="bg-[#FBFBFB] dark:text-white dark:bg-gray-900 lg:mx-24 md:mx-6 mx-2">
      {/* Books Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
        {currentBooks.length > 0 ? (
          currentBooks.map((book, index) => (
            <div
              key={index}
              className="md:w-full md:h-full lg:w-[302px] lg:h-full w-full h-full shadow-lg rounded-lg px-4 bg-white mt-6"
            >
              <div className="flex items-center justify-center mt-4">
                {book.coverImage ? (
                  <Image
                    src={`${BASE_URL}/${book.coverImage}`}
                    width={100}
                    height={100}
                    alt={book.title}
                    className="rounded-md object-cover w-full h-full"
                    priority
                  />
                ) : (
                  <div className="w-full h-[150px] flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
                    No Image Available
                  </div>
                )}
              </div>
              <div className="md:text-[16px] text-[10px] font-medium mt-4 text-start">
                {book.title}
              </div>
              <div className="text-gray-600 text-start text-[8px] md:text-[14px]">
                {book.author}
              </div>

              <div className="flex gap-4 items-center justify-center mt-2">
                <button className="md:w-full md:h-[39px] w-full h-[18px] text-[8px] md:text-[16px] text-white bg-[#0D47A1] rounded-md">
                  Continue Reading
                </button>

                <FavoriteHeart />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-6 dark:text-gray-400">No books found in this category.</div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-700 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Readinglists;
