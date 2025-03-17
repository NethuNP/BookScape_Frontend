import { Suspense } from "react";
import BookList from "@/Components/BookList/bookList"; // Ensure correct import


const page = () => {
  return (
    <Suspense fallback={<p>Loading books...</p>}>
      <BookList />
    </Suspense>
  );
};

export default page;
