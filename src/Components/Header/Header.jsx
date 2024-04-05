import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bar from "./Components/Bar";

const Header = () => {
  const [show, setShow] = useState();

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="container flex items-center justify-between py-5">
        <button onClick={handleShow} className="md:hidden">
          {!show ? (
            <i className="fa-solid fa-bars text-2xl"></i>
          ) : (
            <i className="fa-solid fa-xmark text-2xl"></i>
          )}
        </button>
        <h1 className="text-2xl">
          <Link to="/">LOGO</Link>
        </h1>
        <ul className="md:flex items-center gap-6 hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="all-products">All Products</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="container md:hidden">
        <Bar show={show} />
      </div>
    </div>
  );
};

export default Header;
