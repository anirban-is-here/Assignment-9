import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HeroSlider = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcm5pbmd8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&q=60&w=600",
      title: "Learn and Share Your Skills",
      desc: "Grow your expertise and help others grow too.",
    },
    {
      img: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=600",
      title: "Discover Talented People",
      desc: "Connect with passionate learners and creators.",
    },
    {
      img: "https://images.unsplash.com/photo-1560831340-b9679dc9e9f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtzaG9wfGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=600",
      title: "Exchange Skills, Build Community",
      desc: "Trade your skills for something new you love.",
    },
  ];

  return (
    <div className="mt-20">
      <div className="w-full  h-[500px] px-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full rounded-2xl overflow-hidden shadow-lg"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-center items-center text-center p-6">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-base md:text-lg text-base-100 max-w-2xl">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
