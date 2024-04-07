import React from "react";
import Slider from "react-slick";
import { Button } from "../../../Components/Buttons/Button";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-full relative">
          <img
            className="w-full object-cover h-[280px] md:h-[465px]"
            src="https://gift.tokyocamii.org/cdn/shop/files/Quran_3.png?v=1682488010&width=2400"
            alt=""
          />
          <div className="absolute bg-transparent flex flex-col items-center justify-center gap-4 z-10 top-[30%] left-[25%] md:left-[30%] md:top-[35%] lg:left-[40%]">
            <h1 className="text-white text-4xl md:text-[48px] lg:text-[52px]">Quran Kareem</h1>
            <p className="text-gray-300">The best Islamic Gift</p>
            <Button variant="neutral" className="px-6 py-5">
              SHOP NOW
            </Button>
          </div>
        </div>
        <div className="w-full relative">
          <img
            className="w-full object-cover h-[280px] md:h-[465px]"
            src="https://gift.tokyocamii.org/cdn/shop/files/mat_1.png?v=1682487890&width=2400"
            alt=""
          />
          <div className="absolute bg-transparent flex flex-col items-center justify-center gap-4 z-10 top-[30%] left-[25%] md:left-[35%] md:bg-[#121212] md:py-[50px] md:px-[100px] md:top-[25%] lg:left-[55%]">
            <h1 className="text-white text-4xl md:text-[48px]">Prayer Mats</h1>
            <p className="text-gray-300">10+ different atyles and colours</p>
            <Button variant="banner" className="px-6 py-5">
              SEE MORE
            </Button>
          </div>
        </div>
        <div className="w-full relative">
          <img
            className="w-full object-cover h-[280px] md:h-[465px]"
            src="https://gift.tokyocamii.org/cdn/shop/files/linus-mimietz-K61u4iVjC58-unsplash_1.jpg?v=1680059012&width=2400"
            alt=""
          />
          <div className="absolute bg-transparent flex flex-col items-center justify-center gap-4 z-10 top-[30%] left-[25%] md:left-[15%] md:top-[35%]">
            <h1 className="text-white text-4xl md:text-[48px]">
              Authentic Gifts
            </h1>
            <p className="text-gray-300">For more details</p>
            <Button variant="neutral" className="px-6 py-5">
              CHECK NOW
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
