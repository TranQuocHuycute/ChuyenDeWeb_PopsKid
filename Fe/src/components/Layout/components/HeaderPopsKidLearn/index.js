import React from "react";
import Menu from "../../Popper/Menu";
import images from "../../../../assets/images";
import HeaderWrapper from "../HeaderWrapper";
import MenuPopsKidLearn from "../MenuPopsKidLearn";
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

function HeaderPopsKidLearn() {
  // const [imgActive, setImgActive] = useState(true);

  // const handleClickOutside = () => {
  //   setImgActive(true);
  // };

  // const handdlesSearch = () => {
  //   setImgActive((current) => !current);
  // };

  // const [searchAc, setSearcgAc] = useState(true);
  // const [searchValue, setSearchValue] = useState("");
  // const [seacrhResult, setSearchResult] = useState([]);

  return (
    <HeaderWrapper>
      <div className="relative flex justify-around items-center w-full">
        {/* logo */}
        <div className="  md:block md:w-20 md:h-14  ">
          <img
            className="w-[70px] h-[46px]"
            src={require("../../../../assets/images/logo.png")}
            alt="Logo"
          />
        </div>

        <div className="relative">
          {/* <div className="shadow-md rounded-[24px] absolute  border-t hidden">
            <div className="w-[41rem] h-auto flex bg-white border-b-2 p-4 pt-3">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-transparent placeholder:text-xl placeholder:text-[#BBBBBB] focus:outline-none"
                spellCheck={false}
                placeholder="Tìm kiếm tên khóa học hoặc môn học"
              ></input>
              <button className=" my-[0.2rem]  hover:opacity-80">
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    height="30"
                    width="30"
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
              </button>
            </div>

            <div className="pb-5">
              <ul className="py-2 px-4 list-none p-0 flex flex-wrap ">
                <li className=" w-full mb-1 text-base font-bold ">
                  Hot courses
                </li>
                <li className=" pr-[15px] text-[#fb8a88] hover:opacity-70 no-underline m-0.5 deco rounded-3xl text-base">
                  <a>Tiếng anh</a>
                </li>
                <li className=" pr-[15px] text-[#fb8a88] hover:opacity-70 no-underline m-0.5 deco rounded-3xl text-base">
                  <a>Tiếng anh</a>
                </li>
                <li className=" pr-[15px] text-[#fb8a88] hover:opacity-70 no-underline m-0.5 deco rounded-3xl text-base">
                  <a>Tiếng anh</a>
                </li>
                <li className=" pr-[15px] text-[#fb8a88] hover:opacity-70 no-underline m-0.5 deco rounded-3xl text-base">
                  <a>Cờ Vua & Rubik</a>
                </li>
                <li className=" pr-[15px] text-[#fb8a88] hover:opacity-70 no-underline m-0.5 deco rounded-3xl text-base">
                  <a>Tiếng anh</a>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="md:w-[41rem] h-auto flex  md:p-[10px] md:mx-2 p-2 w-full bg-[#f3f3f3] rounded-full">
            <input
              className="w-full bg-transparent md:placeholder:text-xl placeholder:text-[#BBBBBB] focus:outline-none"
              placeholder="Tìm kiếm tên khóa học hoặc môn học"
            ></input>
            <button className=" md:my-[0.2rem] hover:opacity-80">
              <span>
                <svg
                  viewBox="0 0 32 32"
                  height="30"
                  width="30"
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
            </button>
          </div>
        </div>

        <div className=" hidden md:flex">
          <Menu items={ITEMS} profile={profile}>
            <img className="w-9 h-9 mx-4 bottom-1" src={profile} alt=""></img>
          </Menu>
        </div>
      </div>

      <MenuPopsKidLearn position={"absolute md:-bottom-12 -bottom-12"} />
    </HeaderWrapper>
  );
}

export default HeaderPopsKidLearn;
