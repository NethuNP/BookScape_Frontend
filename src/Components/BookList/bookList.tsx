"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const books = [
  { id: 1, title: "Book 1", category: "Fiction" },
  { id: 2, title: "Book 2", category: "Non-Fiction" },
  { id: 3, title: "Book 3", category: "Educational" },
  { id: 4, title: "Book 4", category: "Children’s Books" },
  { id: 5, title: "Book 5", category: "Special Interest" },
];

const BookList = () => {
  const searchParams = useSearchParams();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const currentCategory = searchParams.get("category");
    setCategory(currentCategory);
    if (currentCategory) {
      setFilteredBooks(books.filter((book) => book.category === currentCategory));
    } else {
      setFilteredBooks(books);
    }
  }, [searchParams]);

  return (
    <div>
      <h2 className="text-xl font-bold">Books in {category || "All Categories"}</h2>
      {filteredBooks.length > 0 ? (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id} className="border-b py-2">
              {book.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No books available in this category.</p>
      )}
    </div>
  );
};

export default BookList;
