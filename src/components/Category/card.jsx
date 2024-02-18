"use client";
import VideoData from "@/store/data";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryCard = ({ id }) => {
  const [videoData, setVideoData] = useState();
  useEffect(() => {
    setVideoData(VideoData().find((v) => v.id == id));
  }, []);

  return (
    <Link href={`/clip/${id}`} className="relative">
      <img
        src={`/img/${videoData?.poster}`}
        className=" cursor-pointer aspect-[3/4] rounded-md object-cover hover:shadow-2xl hover:scale-110 transition-transform"
        alt=""
      />
    </Link>
  );
};

export default CategoryCard;
