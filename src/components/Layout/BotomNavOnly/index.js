import React from "react";
import BottomNavMobile from "../components/BottomNavMobile";
function BottomNavOnly({ children }) {
  return (
    <div>
      {children}
      <div
        className={
          "bottom-0 inset-x-0 fixed w-full h-16 md:h-32 bg-white flex justify-around items-center  transition-all duration-500 md:hidden"
        }
      >
        <BottomNavMobile />
      </div>
    </div>
  );
}

export default BottomNavOnly;
