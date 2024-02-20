import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import VideoData from "@/store/data";

const Sliders = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-full aspect-video"
    >
      {Object.values(VideoData()).flat().map((movie, index) => {
        if (index > 4) return;
        return (
          <SwiperSlide key={index}>
            <img
              className="w-full h-full object-cover"
              src={`/img/${movie.poster_wide}`}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Sliders;
