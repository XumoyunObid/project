import React from "react";
import Header from "../Components/Header/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Contact from "../Pages/Home/Contact/Contact";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-black flex items-center justify-center py-2">
        <h1 className="text-white">Free Shipping</h1>
      </div>
      <header className="border-b">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Contact />
      <footer
        className="border-t border-b"
      >
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
