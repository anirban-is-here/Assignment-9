import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HeroSlider = () => {

    const slides = [
    {
      img: "https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg",
      title: "Learn and Share Your Skills",
      desc: "Grow your expertise and help others grow too.",
    },
    {
      img: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
      title: "Discover Talented People",
      desc: "Connect with passionate learners and creators.",
    },
    {
      img: "https://demo.presscustomizr.com/wp-content/uploads/2016/12/ny_city-1348x500.jpg",
      title: "Exchange Skills, Build Community",
      desc: "Trade your skills for something new you love.",
    },
  ];

    return (
        <div className='mt-20'>
            <div className="w-full  h-[300px] px-10">
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
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-lg">
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