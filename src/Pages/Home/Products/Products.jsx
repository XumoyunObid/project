import React from "react";
import { data } from "../../../Datas/data";
import { Link } from "react-router-dom";
import MainCard from "../../../Components/Cards/MainCard";
import useAutoScrollTop from "../../../Hooks/UseAutoScrollTop";
import CardSkeleton from "../../../Components/Cards/CardSkeleton";

const Products = () => {
  useAutoScrollTop();
  return (
    <div className="px-5 my-10">
      <h1 className="text-2xl container">All Products</h1>
      <ul className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        {data?.map((item) => (
          <li
            key={item.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
          >
            <Link to={`/product/${item.id}`}>
              {data ? <MainCard {...item} /> : <CardSkeleton />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
