import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Bar from "./Components/Bar";
import logo from "/giftc.avif";
import Search from "./Components/Search";

const Header = () => {
  const [show, setShow] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Close the bar when the location changes
    setShow(false);
    enableBodyScroll(); // Enable scrolling when the bar is closed
  }, [location]);

  const handleShow = () => {
    setShow(!show);
    if (!show) {
      disableBodyScroll(); // Disable scrolling when the bar is open
    } else {
      enableBodyScroll(); // Enable scrolling when the bar is closed
    }
  };

  const handleToHome = () => {
    navigate("/");
    setShow(false); // Close the bar after navigation
    enableBodyScroll(); // Enable scrolling when the bar is closed
  };

  const handleToProducts = () => {
    navigate("/all-products");
    setShow(false); // Close the bar after navigation
    enableBodyScroll(); // Enable scrolling when the bar is closed
  };

  const handleToContact = () => {
    navigate("/contacts");
    setShow(false); // Close the bar after navigation
    enableBodyScroll(); // Enable scrolling when the bar is closed
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "";
  };

  return (
    <div>
      <div className="container flex items-center justify-between py-5">
        <button onClick={handleShow} className="lg:hidden w-5">
          {!show ? (
            <i className="fa-solid fa-bars text-2xl"></i>
          ) : (
            <i className="fa-solid fa-xmark text-2xl"></i>
          )}
        </button>
        <div className="flex items-center gap-6">
          <Link to="/">
            <img className="w-[120px]" src={logo} alt="" />
          </Link>
          <ul className="lg:flex items-center gap-6 hidden">
            <li className="hover:underline">
              <button onClick={handleToHome}>Home</button>
            </li>
            <li className="hover:underline">
              <button onClick={handleToProducts}>All Products</button>
            </li>
            <li className="hover:underline">
              <button onClick={handleToContact}>Contact</button>
            </li>
          </ul>
        </div>
        <Search setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className="container lg:hidden">{show && <Bar show={show} />}</div>
    </div>
  );
};

export default Header;
