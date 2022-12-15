import React from "react";
import useScrollDirection from "../useScrollDirection";

function HeaderWrapper({ children }) {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={` sticky ${
        scrollDirection === "down" ? "-top-16 md:-top-32"  : "top-0"
      } w-full h-16 md:h-32 bg-white flex items-center rounded-b-3xl transition-all duration-500 z-50`}
    >
      {children}
      
    </div>
  );
}

export default HeaderWrapper;
