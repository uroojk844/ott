"use client";
import CategoryCard from "@/components/Category/card";
import VideoData from "@/store/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Details = () => {
  const { category } = useParams();

  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    setVideoData(VideoData()[category]);
  }, []);

  return (
    <section>
      <nav className="p-4 flex items-center gap-4 capitalize">
        <Link href="/">
          <FaArrowLeft />
        </Link>
        <span className="font-[600] text-lg">{category}</span>
      </nav>

      <div className="p-4 grid grid-cols-3 gap-4 overflow-scroll no-scrollbar">
        {videoData.length > 0 &&
          videoData.map((movie, i) => (
            <CategoryCard key={i} category={category} id={movie.id} />
          ))}
      </div>
    </section>
  );
};

export default Details;
