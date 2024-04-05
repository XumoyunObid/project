import React from "react";
import { NavLink } from "react-router-dom";

const Bar = ({ show }) => {
  return (
    <>
      {show ? (
        <div className="absolute top-[64px] right-10 left-0 bottom-0 z-10 bg-white">
          <ul className="py-14 flex flex-col">
            <li className="py-3 px-8 focus:bg-gray-100">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="py-3 px-8 focus:bg-gray-100">
              <NavLink to="/all-products">All Products</NavLink>
            </li>
            <li className="py-3 px-8 focus:bg-gray-100">
              <NavLink to="/contacts">Contact</NavLink>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Bar;
