import React from "react";
import { Button } from "../Buttons/Button";

const MainCard = ({ title, img, price, discount }) => {
  return (
    <div className="h-[330px] md:h-[520px] bg-white w-full flex flex-col justify-between">
      <div className="flex items-center justify-center">
        <img
          src={img}
          alt="img"
          className="h-[155px] md:h-[385px] object-contain hover:scale-[1.05] duration-700"
        />
      </div>
      <div>
        <h2 className="text-[12px]">{title}</h2>
        <div className="flex gap-2 items-center md:gap-3 py-2">
          {discount && (
            <span className="text-[13px] text-gray-500 line-through">
              ¥{discount} JPY
            </span>
          )}
          <p className="text-base">¥ {price} JPY</p>
        </div>
      </div>
      <Button variant="secondary" className="w-full">
        Choose options
      </Button>
    </div>
  );
};

export default MainCard;
