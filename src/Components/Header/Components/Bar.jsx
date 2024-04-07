import React from "react";
import { NavLink } from "react-router-dom";

const Bar = ({ show }) => {
  return (
    <>
      {show ? (
        <div
          className={`absolute top-[132px] right-10 bottom-0 left-0 z-10 bg-white md:right-[50%] border-r`}
        >
          <div className="flex flex-col items-start justify-between gap-[200px]">
            <ul className="py-8 flex flex-col">
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
            <div className="flex items-center gap-4 p-8">
              <a href="https://www.facebook.com/gift.tokyocamii/">
                <i className="fa-brands fa-square-facebook text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/gift.tokyocamii/">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Bar;
