import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <Navbar />
      </div>

      <div className="pt-10  container mx-auto">
        <Outlet />
      </div>

      <div className="container mx-auto ">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
