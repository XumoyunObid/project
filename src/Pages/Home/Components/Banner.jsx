import React from "react";
import banner1 from "../../../../../N3 6-oy/gipermart/src/assets/images/banner1.jpg";
import Slider from "react-slick";
import { Button } from "../../../Components/Buttons/Button";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    swipeToSlide: true,
    // autoplay: true,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-full relative">
          <img
            className="w-full object-cover h-[280px] lg:h-[465px]"
            src="https://gift.tokyocamii.org/cdn/shop/files/Quran_3.png?v=1682488010&width=2400"
            alt=""
          />
          <div className="absolute bg-transparent flex flex-col items-center justify-center gap-4 z-10 top-[30%] left-[40%]">
            <h1 className="text-white text-[48px]">Quran Kareem</h1>
            <p className="text-white">The best Islamic Gift</p>
            <Button variant="neutral" className="px-6 py-5">
              SHOP NOW
            </Button>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full object-cover h-[280px] lg:h-[465px]"
            src="https://gift.tokyocamii.org/cdn/shop/files/linus-mimietz-K61u4iVjC58-unsplash_1.jpg?v=1680059012&width=2400"
            alt=""
          />
        </div>
        <div className="w-full">
          <img
            className="w-full object-cover h-[280px] lg:h-[465px]"
            src="https://gift.tokyocamii.org/cdn/shop/files/mat_1.png?v=1682487890&width=2400"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
