import VideoData from "@/store/data";
import Category from "./Category/page";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SimilarVideos = () => {
  const { category, id } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const data = VideoData()[category].filter((movie) => movie.id != id);
    setFilteredData(data);
  }, []);
  return (
    <>
      {filteredData.length > 0 && (
        <>
          <div className="sticky top-0 p-4 text-xl font-[600] z-10 bg-nav mb-2 text-blue-400">
            Similar
          </div>
          <Category title={category} showTitle={false} />
        </>
      )}
    </>
  );
};

export default SimilarVideos;
