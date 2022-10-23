import React, { useState } from "react";
const images = [
  {
    inActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_home__state_inactive_2x-450f2fcc1554-1652439157388-jazbFlNU.png?v=0&format=webp",
    isActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_home__state_active_2x-dcf7245dd06d-1652439153010-QclGd6PT.png?v=0&format=webp",
    title: "Trang chủ",
  },
  {
    inActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_music__state_inactive_2x-ab80edf7b5ae-1652439191539-jyDgBnQp.png?v=0&format=webp",
    isActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_music__state_active_2x-bed58d0c5a97-1652439187298-5gLVstQ2.png?v=0&format=webp",
    title: "Âm nhạc",
  },
  {
    inActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_entertainment__state_inactive_2x-c36ce81ca748-1652439219167-yLLQBRE8.png?v=0&format=webp",
    isActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_entertainment__state_active_2x-edbf8d70a608-1652439214904-mF8xHxaS.png?v=0&format=webp",
    title: "Giải trí",
  },
  {
    inActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_edu__state_inactive_2x-478dcbacd604-1652439236755-L2DOMcfH.png?v=0&format=webp",
    isActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_edu__state_active_2x-d0556aac73f1-1652439232630-Is3GxfUz.png?v=0&format=webp",
    title: "Vui học",
  },
  {
    inActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/learn_menu_inactive-c69dfac478b4-1652452494575-fVZgEJqI.png?v=0&format=webp",
    isActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/learn_menu_icon-30f0585a9072-1652452491696-BoLNfQOa.png?v=0&format=webp",
    title: "Learn",
  },
];

function Nav() {
  const [isActive, setIsActive] = useState(0);

  return (
    <div >
      <ul className="flex content-center">
        {images.map((i, index) => (
          <li key={index}>
            <a
              className="relative flex justify-center"
              onClick={() => setIsActive(index)}
            >
              <img
                className=" w-16 h-16 mx-8 hover:scale-125 duration-300 ease-in-out"
                src={isActive === index ? i.isActive : i.inActive}
              />
              {isActive === index ? (
                <span className="text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                  {i.title}
                </span>
              ) : (
                <span className=" opacity-100 text-gray-600 hover:opacity-100 absolute top-12 py-4">
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

export default Nav;
