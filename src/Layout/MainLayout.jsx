import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Contact from "../Pages/Home/Contact/Contact";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Contact />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
