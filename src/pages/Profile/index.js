import React from "react";
import images from "../../assets/images";
import { Link } from "react-router-dom";

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

function Profile() {
  return (
    <div className="h-screen m-4 mt-16">
      <div className=" flex items-center mx-4">
        <img className="flex-none w-11 h-11" src={profile} alt=""></img>
        <div className="grow h-14 mx-5">
          <p className="text-xs text-[#808080]  font-semibold">
            User ID : 646461313333333333353113131
          </p>
          <p className="text-xs text-[#808080] font-semibold">
            646461313333333333
          </p>
        </div>
        <div className="flex rounded-full bg-[#f0f0f0] w-8 h-8 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path
              fill="#808080"
              d="M18.198.778a12.413 12.413 0 00-1.073 1C13.09 5.808 9.113 9.899 4.999 13.845a10.981 10.981 0 00-3.579 5.829 9.486 9.486 0 01-.362 1.073C.722 21.773.39 22.801.001 23.998c2.437-.814 4.691-1.552 6.931-2.33a3.027 3.027 0 001.1-.681q6.029-5.973 12.025-11.98c1.055-1.055 2.156-2.074 3.117-3.21 1.24-1.465 1.047-3.176-.376-4.608a3.235 3.235 0 00-4.6-.411zM8.422 18.034a8.334 8.334 0 01-4.334 2.639c-.343.075-.673.212-1.2.381.755-1.581.773-3.257 2.053-4.5C8.659 12.939 12.3 9.243 15.968 5.577a4.881 4.881 0 00.368-.45l2.363 2.379c-3.382 3.454-6.879 6.946-10.277 10.528z"
              data-name="Path 596"
            ></path>
          </svg>
        </div>
      </div>
      <div className=" drop-shadow-lg mt-4 border ">
        <div className="flex flex-col-reverse divide-y divide-gray-300 drop-shadow-md divide-y-reverse mx-5">
        {ITEMS.map((data, index) => (
          <button key={index} className="flex w-full  py-5 hover:bg-[#EEEEEE] hover:text-[#09ccc7] hover:border-l-[2px] border-[#09ccc7]">
            <img className="mr-2" src={data.icon} alt="" />
            {/* <FontAwesomeIcon icon="fa-light fa-book-open" /> */}
            <Link to={data.to}> {data.title} </Link>
          </button>
        ))}
        </div>
       
      </div>
   
    </div>
  );
}

export default Profile;
