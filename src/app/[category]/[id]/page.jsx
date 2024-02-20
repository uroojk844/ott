"use client";
import LogoWithName from "@/components/LogoWithName";
import SimilarVideos from "@/components/Similar";
import VideoData from "@/store/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Details = () => {
  const { category, id } = useParams();

  const [videoData, setVideoData] = useState();

  useEffect(() => {
    setVideoData(VideoData()[category].find((v) => v.id == id));
  }, []);

  return (
    <section>
      <nav className="p-4 flex items-center gap-4">
        <Link href="/">
          <FaArrowLeft />
        </Link>
        <span className="text-lg font-[600]">{videoData?.name}</span>
      </nav>

      {/* <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoData?.trailer}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}

      <img
        src={"/img/" + videoData?.poster_wide}
        className="w-full aspect-video object-cover"
      />

      <div className="p-4 capitalize grid gap-2 max-sm:text-xs text-sm">
        <div className="font-[600] text-lg">{videoData?.name}</div>
        <div className="line-clamp-3 text-slate-400">
          {videoData?.description}
        </div>
        <div>
          <span className="font-[600]">Category</span>{" "}
          <span className="text-slate-400">{videoData?.category}</span>
        </div>
        <div>
          <span className="font-[600]">Length</span>{" "}
          <span className=" text-slate-400">{videoData?.length}</span>
        </div>
        <div className="text-sm">
          <span className="font-[600]">Year</span>{" "}
          <span className="text-slate-400">{videoData?.year}</span>
        </div>
      </div>

      <SimilarVideos id={id} filter={videoData?.category} />
    </section>
  );
};

export default Details;
