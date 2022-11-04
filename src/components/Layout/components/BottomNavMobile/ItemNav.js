import React, { useState } from "react";
import images from "../../../../assets/images";
import { Outlet, Link } from "react-router-dom";
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
    to: "/search",
  },
  {
    title: "Yêu thích",
    isActive: images.favoriteIsActive,
    inActive: images.favoriteInActive,
    to: "/learn",
  },
  {
    title: "Tài khoản",
    isActive: images.accIsActive,
    inActive: images.accInActive,
    to: "/profile",
  },
];

function ItemNav() {
  const [isActive, setIsActive] = useState(0);

  return (
    <ul className="flex content-center">
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
  );
}

export default ItemNav;
