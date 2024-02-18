"use client";
import Category from "@/components/Category/page";
import NavBar from "@/components/NavBar";
import Sliders from "@/components/Sliders";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <Sliders />
      <div className="py-6">
        <Category title="Recent uploads" />
        {["Series", "Movies", "Kids", "TV Shows", "Documentaries"].map(
          (title, index) => (
            <Category title={title} key={index} />
          )
        )}
      </div>
    </>
  );
};

export default HomePage;
