import React from "react";
import { Button } from "../Buttons/Button";

const MainCard = ({ title, img, price }) => {
  return (
    <div className="lg:h-[520px] bg-white">
      <div className="w-full flex flex-col justify-between gap-3">
        <div className="flex items-center justify-center lg:h-[385px]">
          <img src={img} alt="img" />
        </div>
        <div>
          <h2 className="text-sm">{title}</h2>
          <p className="text-base">¥ {price} JPY</p>
        </div>
        <Button variant="secondary" className="w-full">
          Choose option
        </Button>
      </div>
    </div>
  );
};

export default MainCard;
