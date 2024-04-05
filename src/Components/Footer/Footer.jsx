import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container flex flex-col gap-4 md:flex-row md:justify-between py-5 border-b-2">
      <div>
        <h2 className="text-gray-600 text-base">Contact</h2>
        <ul className="flex flex-col gap-2 py-4">
          <li className="text-gray-500 text-sm">
            Address: 1-19 Oyama-cho, Shibuya-ku, Tokyo
          </li>
          <li className="text-gray-500 text-sm">Opening hours: 10:00-19:00</li>
          <li className="text-gray-500 text-sm">Phone: 090-2487-1777</li>
          <li className="text-gray-500 text-sm">
            Email:{" "}
            <a href="mailto:tchalalmarket@gmail.com" className="underline">
              tchalalmarket@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-gray-600 text-base">Quick links</h2>
        <ul className="flex flex-col gap-3 py-4">
          <Link className="text-gray-500 text-sm">
            Tokyo Camii official web page
          </Link>
          <Link className="text-gray-500 text-sm">
            Tokyo Camii Halal Market
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
