import React from "react";
import NavBar from "../../Pages/Shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer";

const MainLayOut = () => {
  return (
    <>
      <div className="overflow-hidden">
       
        <NavBar></NavBar>

        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayOut;
