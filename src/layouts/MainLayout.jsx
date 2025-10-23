import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="container mx-auto">
        <Navbar />
      </div>

      <div className="pt-10 container mx-auto overflow-auto">
        <Outlet />
      </div>

      <div className="container mx-auto z-50 ">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
