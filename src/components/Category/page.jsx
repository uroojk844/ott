import VideoData from "@/store/data";
import CategoryCard from "./card";

const Category = ({ title, filter = VideoData() }) => {
  return (
    <section className="max-w-[1500px] mx-auto grid gap-4">
      {title && (
        <div className="px-4 -mb-3 flex items-center justify-between">
          <div className="text-xl font-[600]">{title}</div>
          <div className="text-sm text-blue-400">See all</div>
        </div>
      )}

      <div className="p-4 grid grid-cols-3 gap-4 overflow-scroll no-scrollbar">
        {filter.map((d, i) => (
          <CategoryCard key={i} id={d.id} />
        ))}
      </div>
    </section>
  );
};

export default Category;
