import React, { useEffect, useState } from "react";
import images from "../../../../assets/images";
import useScrollDirection from "../useScrollDirection";
import { Outlet, Link } from "react-router-dom";
import ItemNav from "./ItemNav";

function BottomNavMobile({children}) {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-bottom-32" : "bottom-0 "
      }  w-full h-16 md:h-32 bg-white flex  items-center  transition-all duration-500 md:hidden z-50`}
    >
      {children}
    </div>
  );
}

export default BottomNavMobile;
