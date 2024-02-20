import VideoData from "@/store/data";
import CategoryCard from "./card";
import Link from "next/link";

const Category = ({ showTitle = true, title }) => {
  const videos = VideoData()[title];

  return (
    <section className="max-w-[1500px] mx-auto grid gap-4">
      {showTitle && title && (
        <div className="px-4 -mb-3 flex items-center justify-between">
          <div className="text-xl font-[600] capitalize">{title}</div>
          <Link href={`/${title}`} className="text-sm text-blue-400">
            See all
          </Link>
        </div>
      )}

      <div className="p-4 grid grid-cols-3 gap-4 overflow-scroll no-scrollbar">
        {videos?.map((video, i) => {
          return <CategoryCard key={i} category={title} id={video.id} />;
        })}
      </div>
    </section>
  );
};

export default Category;
