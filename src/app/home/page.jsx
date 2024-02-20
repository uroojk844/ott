"use client";
import Category from "@/components/Category/page";
import NavBar from "@/components/NavBar";
import SimilarVideos from "@/components/Similar";
import Sliders from "@/components/Sliders";
import VideoData from "@/store/data";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <Sliders />
      <div className="py-6">
        {/* <Category title="Recent uploads" /> */}
        {Object.keys(VideoData()).map((category, index) => {
          return <Category title={category} key={index} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
