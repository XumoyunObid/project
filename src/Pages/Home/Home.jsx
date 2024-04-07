import React from "react";
import Banner from "./Components/Banner";
import Products from "./Products/Products";
import useAutoScrollTop from "../../Hooks/UseAutoScrollTop";

const Home = () => {
  useAutoScrollTop();
  return (
    <div>
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
