import React from "react";

const images = {
  home1:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_home__state_inactive_2x-450f2fcc1554-1652439157388-jazbFlNU.png?v=0&format=webp",
  home2:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_home__state_active_2x-dcf7245dd06d-1652439153010-QclGd6PT.png?v=0&format=webp",
  music1:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_music__state_inactive_2x-ab80edf7b5ae-1652439191539-jyDgBnQp.png?v=0&format=webp",
  music2:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_music__state_active_2x-bed58d0c5a97-1652439187298-5gLVstQ2.png?v=0&format=webp",
  entertaiment1:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_entertainment__state_inactive_2x-c36ce81ca748-1652439219167-yLLQBRE8.png?v=0&format=webp",
  entertaiment2:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_entertainment__state_active_2x-edbf8d70a608-1652439214904-mF8xHxaS.png?v=0&format=webp",
  happylearning1:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_edu__state_inactive_2x-478dcbacd604-1652439236755-L2DOMcfH.png?v=0&format=webp",
  happylearning2:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_edu__state_active_2x-d0556aac73f1-1652439232630-Is3GxfUz.png?v=0&format=webp",
  learning1:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/learn_menu_inactive-c69dfac478b4-1652452494575-fVZgEJqI.png?v=0&format=webp",
  learning2:
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/learn_menu_icon-30f0585a9072-1652452491696-BoLNfQOa.png?v=0&format=webp",
  profile:
    "https://products.popsww.com/api/v2/containers/file2/profiles/pk20_profile_picture__1_-0727741cd4d3-1640912661200-l305wzS2.jpg?maxW=120&format=webp",
};

function Header() {
  return (
    <div className="w-full h-32 bg-white flex justify-around items-center  ">
      {/* logo */}
      <div className="w-20 h-14">
        <img src={require("../../../../assets/images/logo.png")} alt="Logo" />
      </div>

      {/* Nav */}

      <div>
        <ul className="flex content-center">
          <li>
            <a className="relative flex justify-center">
              <img
                className=" w-16 h-16 mx-8 hover:scale-125 duration-300 ease-in-out"
                src={images.home2}
              />
              <span className=" text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                Trang chủ
              </span>
            </a>
          </li>
          <li>
            <a className="relative flex justify-center">
              <img
                className=" w-16 h-16 mx-8 hover:scale-125 duration-300 ease-in-out"
                src={images.music1}
              />
              <span className=" text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                Âm nhạc
              </span>
            </a>
          </li>
          <li>
            <a className="relative flex justify-center">
              <img
                className=" w-16 h-16 mx-8 hover:scale-125 duration-300 ease-in-out"
                src={images.entertaiment1}
              />
              <span className=" text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                Giải trí
              </span>
            </a>
          </li>
          <li>
            <a className="relative flex justify-center">
              <img
                className=" w-16 h-16 mx-8 hover:scale-125 duration-300 ease-in-out"
                src={images.happylearning1}
              />
              <span className=" text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                Giáo dục
              </span>
            </a>
          </li>
          <li>
            <a className="relative flex justify-center">
              <img
                className=" w-16 h-16 mx-8 hover:scale-125 duration-300 ease-in-out"
                src={images.learning1}
              />
              <span className=" text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                Learn
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Item */}
      <div className="flex">
        <span className="mx-4">
          <svg
            viewBox="0 0 32 32"
            height="35"
            width="35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3159 4.99716C9.61312 4.99716 4.99718 9.61306 4.99718 15.3158C4.99718 21.0186 9.61312 25.6345 15.3159 25.6345C21.0188 25.6345 25.6347 21.0186 25.6347 15.3158C25.6347 14.7643 26.0818 14.3172 26.6333 14.3172C27.1848 14.3172 27.6319 14.7643 27.6319 15.3158C27.6319 22.1216 22.1218 27.6317 15.3159 27.6317C8.51011 27.6317 3 22.1216 3 15.3158C3 8.51006 8.51011 3 15.3159 3C15.8675 3 16.3145 3.44708 16.3145 3.99858C16.3145 4.55008 15.8675 4.99716 15.3159 4.99716ZM19.0098 4.36827C18.4808 4.36827 18.0519 4.67461 18.0519 5.05249C18.0519 5.43037 18.4808 5.7367 19.0098 5.7367H26.6731C27.2021 5.7367 27.631 5.43037 27.631 5.05249C27.631 4.67461 27.2021 4.36827 26.6731 4.36827H19.0098ZM18.9642 8.47356C18.4604 8.47356 18.0519 8.77989 18.0519 9.15777C18.0519 9.53565 18.4604 9.84199 18.9642 9.84199H22.6134C23.1172 9.84199 23.5257 9.53565 23.5257 9.15777C23.5257 8.77989 23.1172 8.47356 22.6134 8.47356H18.9642ZM26.396 25.1524C26.0525 24.8088 25.4955 24.8088 25.1519 25.1524C24.8084 25.4959 24.8084 26.0529 25.1519 26.3965L27.4978 28.7423C27.8413 29.0859 28.3983 29.0859 28.7419 28.7423C29.0854 28.3988 29.0854 27.8418 28.7419 27.4982L26.396 25.1524Z"
              fill="#B6B6B6"
            ></path>
          </svg>
        </span>

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

        <img className="w-9 h-9 mx-4" src={images.profile}></img>
      </div>
    </div>
  );
}

export default Header;
