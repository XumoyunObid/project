import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container flex flex-col gap-4 md:flex-row md:justify-between py-5 border-b-2 w-full">
        <div
          className="md:w-1/2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <h2 className="text-gray-600 text-base">Contact</h2>
          <ul className="flex flex-col gap-2 py-4">
            <li className="text-gray-500 text-sm">
              Address: 1-19 Oyama-cho, Shibuya-ku, Tokyo
            </li>
            <li className="text-gray-500 text-sm">
              Opening hours: 10:00-19:00
            </li>
            <li className="text-gray-500 text-sm">
              Phone: <a href="tel:090-2487-1777">090-2487-1777</a>
            </li>
            <li className="text-gray-500 text-sm">
              Email:{" "}
              <a href="mailto:tchalalmarket@gmail.com" className="underline">
                tchalalmarket@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div
          className="md:w-1/2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <h2 className="text-gray-600 text-base">Quick links</h2>
          <div className="flex flex-col gap-3 py-4">
            <Link
              to="https://tokyocamii.org"
              className="text-gray-500 text-sm hover:underline"
            >
              Tokyo Camii official web page
            </Link>
            <Link
              to="https://halalmarket.tokyocamii.org"
              className="text-gray-500 text-sm hover:underline"
            >
              Tokyo Camii Halal Market
            </Link>
            <Link
              to="https://www.facebook.com/gift.tokyocamii/"
              className="text-gray-500 text-sm flex items-center gap-1 hover:underline"
            >
              <i className="fa-brands fa-square-facebook text-2xl"></i> Tokyo
              Camii Facebook
            </Link>
            <Link
              to="https://www.instagram.com/gift.tokyocamii/"
              className="text-gray-500 text-sm flex items-center gap-1 hover:underline"
            >
              <i className="fa-brands fa-instagram text-2xl"></i> Tokyo Camii
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="container py-10 flex items-center justify-center">
        <div
          className="flex flex-col md:flex-row items-center gap-3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <div className="flex items-center gap-3">
            <li className="list-none text-gray-500 text-[10px] hover:underline">
              <a href="/">© 2024, Tokyo Camii Gift</a>
            </li>
            <li className=" text-gray-500 text-[10px] hover:underline">
              <a href="/policies/refund-policy">Refund policy</a>
            </li>
          </div>
          <div className="flex items-center gap-3">
            <li className=" text-gray-500 text-[10px] hover:underline">
              <a href="/policies/terms-of-service">Terms of service</a>
            </li>
            <li className=" text-gray-500 text-[10px] hover:underline">
              <a href="/policies/contact-information">Contact information</a>
            </li>
          </div>
          <li className=" text-gray-500 text-[10px] hover:underline">
            <a href="/policies/legal-notice">Legal notice</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Footer;
