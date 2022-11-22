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
      }  w-full h-16 md:h-32 bg-white flex justify-around items-center  transition-all duration-500 md:hidden`}
    >
      <ItemNav/>
    </div>
  );
}

export default BottomNavMobile;
