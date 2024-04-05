import React from "react";
import { data } from "../../../Datas/data";
import { Link } from "react-router-dom";
import MainCard from "../../../Components/Cards/MainCard";

const Products = () => {
  return (
    <div className="px-5 my-10">
      <h1 className="text-2xl">All Products</h1>
      <ul className="grid grid-cols-2 lg:grid-cols-5 gap-5">
        {data?.map((item) => (
          <li key={item.id}>
            <Link>
              <MainCard {...item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
