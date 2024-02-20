import VideoData from "@/store/data";
import Category from "./Category/page";
import { useParams } from "next/navigation";

const SimilarVideos = () => {
  const { category, id } = useParams();
  const filteredData = VideoData()[category].filter((movie) => movie.id != id);
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
