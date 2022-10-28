import React, { useEffect, useState } from "react";
import images from "../../../../assets/images";
import useScrollDirection from "../useScrollDirection";

const ITEMS = [
  {
    title: "Home",
    isActive: images.homeIsActive,
    inActive: images.homeInActive,
    to: "/",
  },
  {
    title: "Tìm kiếm",
    isActive: images.searchIsActive,
    inActive: images.searchInActive,
    to: "/seacrh",
  },
  {
    title: "Yêu thích",
    isActive: images.favoriteIsActive,
    inActive: images.favoriteInActive,
    to: "/seacrh",
  },
  {
    title: "Tài khoản",
    isActive: images.accIsActive,
    inActive: images.accInActive,
    to: "/seacrh",
  },
];

function BottomNavMobile() {
  const scrollDirection = useScrollDirection();
  const [isActive, setIsActive] = useState(0);
  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-bottom-32" : "bottom-0"
      }  w-full h-16 md:h-32 bg-white flex justify-around items-center  transition-all duration-500 md:hidden`}
    >
      <ul className="flex content-center">
        {ITEMS.map((i, index) => (
          <li key={index}>
            <a
              className="relative flex justify-center"
              onClick={() => setIsActive(index)}
            >
              <img
                className=" w-6 h-6 md:w-16 md:h-16 mx-8 hover:scale-125 duration-300 ease-in-out"
                src={isActive === index ? i.isActive : i.inActive}
              />
              {isActive === index ? (
                <span className="  md:hidden text-[#4dbdc8] text-[14px]  hover:opacity-100 absolute top-6 ">
                  {i.title}
                </span>
              ) : (
                <span className="  md:hidden text-[#B6B6B6] text-[14px]  absolute top-6">
                  {i.title}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BottomNavMobile;
