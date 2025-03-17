import { Suspense } from "react";
import ReadingList from "@/Components/ReadingList/readinglist"; // Ensure correct import

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Reading List</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ReadingList />
      </Suspense>
    </div>
  );
};

export default page;
