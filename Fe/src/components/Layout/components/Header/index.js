import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Seacrh from "./Seacrh";
import Menu from "../../Popper/Menu";
import images from "../../../../assets/images";
import useScrollDirection from "../useScrollDirection";

const profile =
  "https://products.popsww.com/api/v2/containers/file2/profiles/pk20_profile_picture__1_-0727741cd4d3-1640912661200-l305wzS2.jpg?maxW=120&format=webp";

const ITEMS = [
  {
    title: "POPS kid learn",
    icon: images.learnIcon,

    to: "/learn",
  },
  {
    title: "Đăng xuất",
    icon: images.logoutIcon,
    to: "/learn",
  },
  {
    title: "Về chúng tôi",
    icon: images.blogIcon,
    to: "/learn",
  },
];

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

function Header() {
  const [imgActive, setImgActive] = useState(true);
  const scrollDirection = useScrollDirection();

  const handleClickOutside = () => {
    setImgActive(true);
  };

  const ref = useOutsideClick(handleClickOutside);

  const handdlesSearch = () => {
    setImgActive((current) => !current);
  };

  return (
    <div
      ref={ref}
      className={` sticky ${
        scrollDirection === "down" ? "-top-32" : "top-0"
      } z-10 w-full h-16 md:h-32 bg-white flex justify-around items-center rounded-b-3xl transition-all duration-500 `}
    >
      {/* logo */}
      <div className=" hidden md:block md:w-20 md:h-14  ">
        <img src={require("../../../../assets/images/logo.png")} alt="Logo" />
      </div>

      {/* <Nav/> */}
      {imgActive ? <Nav /> : <Seacrh />}

      {/* Item */}
      <div className=" hidden md:flex">
        <button className="mx-4">
          <img
            src={imgActive ? images.searchInActive : images.searchIsActive}
            onClick={() => handdlesSearch()}
            alt=""
          />
        </button>

        <span className="mx-4">
          <svg
            viewBox="0 0 24 24"
            height="35"
            width="35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.558 19.9191C12.252 20.027 11.748 20.027 11.442 19.9191C8.832 19.0292 3 15.3169 3 9.02472C3 6.24719 5.241 4 8.004 4C9.642 4 11.091 4.79101 12 6.01348C12.909 4.79101 14.367 4 15.996 4C18.759 4 21 6.24719 21 9.02472C21 15.3169 15.168 19.0292 12.558 19.9191Z"
              stroke="#B6B6B6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 14C9 16 10.592 16.6462 11.752 16.9705C11.888 17.0098 12.112 17.0098 12.248 16.9705C13.408 16.6462 15 16 16 14"
              stroke="#D5D5D5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <Menu items={ITEMS} profile={profile}>
          <img className="w-9 h-9 mx-4" src={profile} alt=""></img>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
