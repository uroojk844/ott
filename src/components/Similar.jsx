import VideoData from "@/store/data";
import Category from "./Category/page";

const SimilarVideos = ({ filter, id }) => {
  const filteredData = VideoData().filter(
    (d) => d.category == filter && d.id != id
  );
  return (
    <>
      {filteredData.length > 0 && (
        <>
          <div className="sticky top-0 p-4 text-xl font-[600] z-10 bg-nav mb-2 text-blue-400">
            Similar
          </div>
          <Category filter={filteredData} />
        </>
      )}
    </>
  );
};

export default SimilarVideos;
