import React, { useState } from "react";
import images from "../../../../../assets/images";
import { Link } from "react-router-dom";
import BottomNavMobile from "../../BottomNavMobile";
const ITEMS = [
  {
    title: "Home",
    isActive: images.homeIsActive,
    inActive: images.homeInActive,
    to: "/learn",
  },

  {
    title: "Tài khoản",
    isActive: images.accIsActive,
    inActive: images.accInActive,
    to: "/profile_popskidlearn",
  },
];

function BotttomPopskid() {
  const [isActive, setIsActive] = useState(0);

  return (
    <BottomNavMobile>
      <div className="w-full">
        <ul className="flex justify-around">
          {ITEMS.map((i, index) => (
            <li key={index}>
              <Link
                className="relative flex justify-center"
                onClick={() => setIsActive(index)}
                to={i.to}
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </BottomNavMobile>
  );
}

export default BotttomPopskid;
