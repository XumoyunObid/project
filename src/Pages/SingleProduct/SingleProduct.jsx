import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Datas/data";

const SingleProduct = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id == id);
  console.log(product);
  return (
    <div className="container flex flex-col md:flex-row gap-3 py-8">
      <div className="md:w-1/2 lg:w-3/4 flex items-center justify-center">
        <img
          src={product.img}
          alt="product image"
          className="lg:w-[533px] lg:h-[533px] border"
        />
      </div>
      <div className="md:w-1/2 lg:w-1/4 flex flex-col gap-3">
        <h3 className="text-[12px] text-gray-500">TOKYO CAMII GIFT</h3>
        <h1 className="text-[28px]">{product.title}</h1>
        <div className="flex gap-3 items-center">
          {product.discount && (
            <span className="text-gray-500 line-through text-[12px]">
              ¥{product.discount} JPY
            </span>
          )}{" "}
          <p className="text-gray-600 text-md">¥{product.price} JPY</p>
        </div>
        <p>Tax included</p>
      </div>
    </div>
  );
};

export default SingleProduct;
