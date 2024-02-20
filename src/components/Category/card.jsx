"use client";
import VideoData from "@/store/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryCard = ({ category, id }) => {
  const params = useParams();
  if (id == params.id) return;
  const [videoData, setVideoData] = useState();
  useEffect(() => {
    setVideoData(VideoData()[category].find((v) => v.id == id));
  }, []);

  return (
    <Link href={`/${category}/${id}`} className="relative">
      <img
        src={`/img/${videoData?.poster}`}
        className=" cursor-pointer aspect-[3/4] rounded-md object-cover hover:shadow-2xl hover:scale-110 transition-transform"
        alt=""
      />
    </Link>
  );
};

export default CategoryCard;
