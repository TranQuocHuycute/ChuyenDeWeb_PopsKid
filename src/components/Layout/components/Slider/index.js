import React, { useState } from "react";
import { main } from "./main.js";

const images = [
  {
    inActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s9_tap_417_hat_dau_ac_quy_bi_day_horizontal-142815c39f42-1627546198502-7WUH7c8F.png?v=0&maxW=320&format=webp",
    isActive:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s9_tap_417_hat_dau_ac_quy_bi_day_horizontal-142815c39f42-1627546198502-7WUH7c8F.png?v=0&maxW=320&format=webp",
    title: "Doraemon S9 - Tap 41 Hat Dau Ac Quy Bi Day",
  },
];
//   //
//   {
//     inActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_home__state_inactive_2x-450f2fcc1554-1652439157388-jazbFlNU.png?v=0&format=webp",
//     isActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_home__state_active_2x-dcf7245dd06d-1652439153010-QclGd6PT.png?v=0&format=webp",
//     title: "Trang chủ",
//   },
//   {
//     inActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_music__state_inactive_2x-ab80edf7b5ae-1652439191539-jyDgBnQp.png?v=0&format=webp",
//     isActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_music__state_active_2x-bed58d0c5a97-1652439187298-5gLVstQ2.png?v=0&format=webp",
//     title: "Âm nhạc",
//   },
//   {
//     inActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_entertainment__state_inactive_2x-c36ce81ca748-1652439219167-yLLQBRE8.png?v=0&format=webp",
//     isActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_entertainment__state_active_2x-edbf8d70a608-1652439214904-mF8xHxaS.png?v=0&format=webp",
//     title: "Giải trí",
//   },
//   {
//     inActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_edu__state_inactive_2x-478dcbacd604-1652439236755-L2DOMcfH.png?v=0&format=webp",
//     isActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/platform_mobile__position_top__tab_edu__state_active_2x-d0556aac73f1-1652439232630-Is3GxfUz.png?v=0&format=webp",
//     title: "Vui học",
//   },
//   {
//     inActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/learn_menu_inactive-c69dfac478b4-1652452494575-fVZgEJqI.png?v=0&format=webp",
//     isActive:
//       "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/learn_menu_icon-30f0585a9072-1652452491696-BoLNfQOa.png?v=0&format=webp",
//     title: "Learn",
//   },
// ];
//
// const profile =
//   "https://products.popsww.com/api/v2/containers/file2/profiles/pk20_profile_picture__1_-0727741cd4d3-1640912661200-l305wzS2.jpg?maxW=120&format=webp";

function Slider() {
  const [isActive, setIsActive] = useState(0);

  return (
    <div class="bg-white">
      {/* <div class="bg-white">
      <div class="font-bold ">
        <a>Doraemon S9</a>
      </div>

      <div>
        <div>
          <button>toi</button>
        </div>
        <div>
          <button>lui</button>
        </div>
        <div>
          <div>
            <div>
              <div>
                {images.map((i, index) => (
                  <li key={index}>
                    <a
                      className="relative flex justify-center"
                      onClick={() => setIsActive(index)}
                    >
                      <img
                        className=" w-220 h-123.75 mx-8 hover:scale-125 duration-300 ease-in-out"
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
              </div>
              <div>
                <a>Doraemon S9 - Tap 41 Hat Dau Ac Quy Bi Day</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> */}
      <div className="flex w-full flex-row px-10 pt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
        <a>
          <h3 className="font-bold ">Doraemon S9</h3>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      <section>
        <div class="flex justify-end flex-row">
          {/* < */}
          <div class="flex items-center">
            <div class="text-right">
              <button
                // onClick={prev()}
                class="p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* > */}
          <div class="flex items-center">
            <div class="text-right">
              <button
                // onClick={next()}
                class="p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* slider */}
      <section className="px-10">
        <div class="flex">
          <div id="sliderContainer" class="w-10/12 overflow-hidden">
            <ul id="slider" class="flex w-full">
              <li class="p-5 w-100">
                <div class="border rounded-lg p-5 h-full">
                  {/* <img
                    class="h-50 w-full object-cover rounded-md"
                    src=""
                    alt=""
                  ></img> */}
                  {images.map((i, index) => (
                    <li key={index}>
                      <a
                        className="relative flex justify-center"
                        onClick={() => setIsActive(index)}
                      >
                        <img
                          className="w-28 h-16 mx-1 hover:scale-125 duration-300 ease-in-out"
                          src={isActive === index ? i.isActive : i.inActive}
                        />
                        {isActive === index ? (
                          <span className="text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                            {/* {i.title} */}
                          </span>
                        ) : (
                          <span className=" opacity-100 text-gray-600 hover:opacity-100 absolute top-12 py-4">
                            {/* {i.title} */}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                  <h2 class="mt-2 text-2xl font-bold text-gray-700">
                    doraemon s9 tap 417 hat dau ac quy bi day
                  </h2>
                  {/* <p class="mt-2 text-gray-500">assa</p>
                  <button class="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bold">
                    read more
                  </button> */}
                </div>
              </li>

              <li class="p-5 w-100">
                <div class="border rounded-lg p-5 h-full">
                  {/* <img
                    class="h-50 w-full object-cover rounded-md"
                    src=""
                    alt=""
                  ></img> */}
                  {images.map((i, index) => (
                    <li key={index}>
                      <a
                        className="relative flex justify-center"
                        onClick={() => setIsActive(index)}
                      >
                        <img
                          className="w-28 h-16 mx-1 hover:scale-125 duration-300 ease-in-out"
                          src={isActive === index ? i.isActive : i.inActive}
                        />
                        {isActive === index ? (
                          <span className="text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                            {/* {i.title} */}
                          </span>
                        ) : (
                          <span className=" opacity-100 text-gray-600 hover:opacity-100 absolute top-12 py-4">
                            {/* {i.title} */}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                  <h2 class="mt-2 text-2xl font-bold text-gray-700">
                    doraemon s9 tap 417 hat dau ac quy bi day
                  </h2>
                  {/* <p class="mt-2 text-gray-500">assa</p>
                  <button class="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bold">
                    read more
                  </button> */}
                </div>
              </li>

              <li class="p-5 w-100">
                <div class="border rounded-lg p-5 h-full">
                  {/* <img
                    class="h-50 w-full object-cover rounded-md"
                    src=""
                    alt=""
                  ></img> */}
                  {images.map((i, index) => (
                    <li key={index}>
                      <a
                        className="relative flex justify-center"
                        onClick={() => setIsActive(index)}
                      >
                        <img
                          className="w-28 h-16 mx-1 hover:scale-125 duration-300 ease-in-out"
                          src={isActive === index ? i.isActive : i.inActive}
                        />
                        {isActive === index ? (
                          <span className="text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                            {/* {i.title} */}
                          </span>
                        ) : (
                          <span className=" opacity-100 text-gray-600 hover:opacity-100 absolute top-12 py-4">
                            {/* {i.title} */}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                  <h2 class="mt-2 text-2xl font-bold text-gray-700">
                    doraemon s9 tap 417 hat dau ac quy bi day
                  </h2>
                  {/* <p class="mt-2 text-gray-500">assa</p>
                  <button class="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bold">
                    read more
                  </button> */}
                </div>
              </li>

              <li class="p-5 w-100">
                <div class="border rounded-lg p-5 h-full">
                  {/* <img
                    class="h-50 w-full object-cover rounded-md"
                    src=""
                    alt=""
                  ></img> */}
                  {images.map((i, index) => (
                    <li key={index}>
                      <a
                        className="relative flex justify-center"
                        onClick={() => setIsActive(index)}
                      >
                        <img
                          className="w-28 h-16 mx-1 hover:scale-125 duration-300 ease-in-out"
                          src={isActive === index ? i.isActive : i.inActive}
                        />
                        {isActive === index ? (
                          <span className="text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                            {/* {i.title} */}
                          </span>
                        ) : (
                          <span className=" opacity-100 text-gray-600 hover:opacity-100 absolute top-12 py-4">
                            {/* {i.title} */}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                  <h2 class="mt-2 text-2xl font-bold text-gray-700">
                    doraemon s9 tap 417 hat dau ac quy bi day
                  </h2>
                  {/* <p class="mt-2 text-gray-500">assa</p>
                  <button class="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bold">
                    read more
                  </button> */}
                </div>
              </li>

              <li class="p-5 w-100">
                <div class="border rounded-lg p-5 h-full">
                  {/* <img
                    class="h-50 w-full object-cover rounded-md"
                    src=""
                    alt=""
                  ></img> */}
                  {images.map((i, index) => (
                    <li key={index}>
                      <a
                        className="relative flex justify-center"
                        onClick={() => setIsActive(index)}
                      >
                        <img
                          className="w-28 h-16 mx-1 hover:scale-125 duration-300 ease-in-out"
                          src={isActive === index ? i.isActive : i.inActive}
                        />
                        {isActive === index ? (
                          <span className="text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                            {/* {i.title} */}
                          </span>
                        ) : (
                          <span className=" opacity-100 text-gray-600 hover:opacity-100 absolute top-12 py-4">
                            {/* {i.title} */}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                  <h2 class="mt-2 text-2xl font-bold text-gray-700">
                    doraemon s9 tap 417 hat dau ac quy bi day
                  </h2>
                  {/* <p class="mt-2 text-gray-500">assa</p>
                  <button class="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bold">
                    read more
                  </button> */}
                </div>
              </li>

              <li class="p-5 w-100">
                <div class="border rounded-lg p-5 h-full">
                  {/* <img
                    class="h-50 w-full object-cover rounded-md"
                    src=""
                    alt=""
                  ></img> */}
                  {images.map((i, index) => (
                    <li key={index}>
                      <a
                        className="relative flex justify-center"
                        onClick={() => setIsActive(index)}
                      >
                        <img
                          className="w-28 h-16 mx-1 hover:scale-125 duration-300 ease-in-out"
                          src={isActive === index ? i.isActive : i.inActive}
                        />
                        {isActive === index ? (
                          <span className="text-[#4dbdc8] opacity-100 hover:opacity-100 absolute top-16">
                            {/* {i.title} */}
                          </span>
                        ) : (
                          <span className=" opacity-100 text-gray-600 hover:opacity-100 absolute top-12 py-4">
                            {/* {i.title} */}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                  <h2 class="mt-2 text-2xl font-bold text-gray-700">
                    doraemon s9 tap 417 hat dau ac quy bi day
                  </h2>
                  {/* <p class="mt-2 text-gray-500">assa</p>
                  <button class="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bold">
                    read more
                  </button> */}
                </div>
              </li>


            </ul>
          </div>
        </div>
      </section>

      {/* <script src="main.js"></script> */}
    </div>
  );
}

export default Slider;
