import React, { useState } from "react";
import Nav from "./Nav";
import Seacrh from "./Seacrh";
import Menu from "../../Popper/Menu";
import images from "../../../../assets/images";

const profile =
  "https://products.popsww.com/api/v2/containers/file2/profiles/pk20_profile_picture__1_-0727741cd4d3-1640912661200-l305wzS2.jpg?maxW=120&format=webp";

const ITEMS = [
  {
    title: "POPS kid learn",
    icon: images.searchIsActive,

    to: "/learn",
  },
  {
    title: "Đăng xuất",
    icon: images.searchIsActive,
    to: "/learn",
  },
  {
    title: "Về chúng tôi",
    icon: images.searchIsActive,
    to: "/learn",
  },
];
function Header() {
  const [imgActive, setImgActive] = useState(true);
  const handdlesSearch = () => {
    setImgActive((current) => !current);
  };
  return (
    <div className="w-full h-32 bg-white flex justify-around items-center  ">
      {/* logo */}
      <div className="w-20 h-14">
        <img src={require("../../../../assets/images/logo.png")} alt="Logo" />
      </div>

      {/* Nav */}

      {/* <Nav/> */}
      {imgActive ? <Nav /> : <Seacrh />}

      {/* Item */}
      <div className="flex">
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

        <Menu items={ITEMS}>
          <img className="w-9 h-9 mx-4" src={profile} alt=""></img>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
