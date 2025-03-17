import { Suspense } from "react";
import ReadingList from "@/Components/ReadingList/readinglist"; // Ensure correct import

const page = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <ReadingList />
      </Suspense>
    </div>
  );
};

export default page;
