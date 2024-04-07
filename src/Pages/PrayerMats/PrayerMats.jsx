import React from "react";
import MainCard from "../../Components/Cards/MainCard";
import { Link } from "react-router-dom";
import CardSkeleton from "../../Components/Cards/CardSkeleton";
import { mats } from "../../Datas/data";

const PrayerMats = () => {
  return (
    <div className="container my-5">
      <h1 className="text-[36px] mb-10">礼拝マット・Prayer Mat</h1>
      <h2 className="text-md md:text-[28px] text-gray-500 my-3">
        Prayer Mat from Tokyo Camii Gifts
      </h2>
      <div className="flex items-center justify-between">
        <div></div>
        <p className="text-sm text-gray-500">{mats.length} products</p>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-5">
        {mats?.map((item) => (
          <li
            key={item.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${item.id}00`}
          >
            <Link to={`/product/${item.id}`}>
              {mats ? <MainCard {...item} /> : <CardSkeleton />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrayerMats;
