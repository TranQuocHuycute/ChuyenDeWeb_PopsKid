import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function MenuPopsKidLearn({ position }) {
  const categories = [
    { id: 1, title: 'Khám Phá', to: '/learn' },
    { id: 2, title: 'Khóa Học', to: '/courseDetails' },
    { id: 4, title: 'Đối Tác Giáo Dục' },
    { id: 5, title: 'Khóa Học Đã Đăng Ký' },
    { id: 6, title: 'Trở về popskid', to: '/' },
  ]
  const [activeCate, setActiveCate] = useState(1)
  const [showSidebar, setShowSidebar] = useState(false)
  const Sidebar = () => {
    return (
      <div>
        {showSidebar ? (
          <div
            className={`top-0 right-0 w-full bg-white text-black fixed h-full z-40 ease-in-out duration-300 ${
              showSidebar ? 'translate-x-0 ' : 'translate-x-full'
            }`}
          >
            <div class="relative z-50 border-b border-[#808080]">
              <h3 class="p-4 text-center font-medium text-base">
                POPS Kids Learn
              </h3>
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                class=" absolute top-0 right-0 h-full px-3"
              >
                <p className="= text-[30px] text-[#808080]">x</p>
              </button>
            </div>
            <ul className=" ">
              {categories.map((i) => {
                return (
                  <li onClick={() => setShowSidebar(!showSidebar)}>
                    <Link
                      to={i.to}
                      onClick={() => setActiveCate(i.id)}
                      className={`relative py-5 px-2 mx-2 block text-base capitalize hover:border-b-2 ${
                        activeCate === i.id
                          ? 'text-[#fe7f56] border-b-2'
                          : 'text-[#808080] '
                      } border-[#fe7f56]`}
                      title=""
                    >
                      {i.title}
                    </Link>
                  </li>
                )
              })}
              <li>
                <a
                  className=" text-[#52a5f1] text-lg relative md:absolute md:top-3 left-3"
                  title=""
                >
                  Trở thành giáo viên
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            class=" md:hidden absolute top-0 right-0 h-full py-3 px-2 w-[44px] bg-white shadow-[-35px_0_10px_0_rgba(255,255,255)]"
          >
            <span class="block w-[22px] h-[2px] bg-[#808080] mb-2"></span>
            <span class="block w-[22px] h-[2px] bg-[#808080] mb-2"></span>
            <span class="block w-[22px] h-[2px] bg-[#808080] "></span>
          </div>
        )}
      </div>
    )
  }
  return (
    <div
      className={`w-full border-b bg-[#f4f6f8] border-[#e5e7eb] z-50 ${position}`}
    >
      <div className="flex justify-center items-center relative md:mx-20">
        <div className="overflow-auto">
          <ul className="flex items-center whitespace-nowrap ">
            {categories.map((i) => {
              return (
                <li>
                  <Link
                    onClick={() => setActiveCate(i.id)}
                    to={i.to}
                    className={` relative py-3 px-2 mx-2 block text-base capitalize hover:border-b-2 ${
                      activeCate === i.id
                        ? 'text-[#fe7f56] border-b-2'
                        : 'text-[#808080] '
                    } border-[#fe7f56]`}
                    title=""
                  >
                    {i.title}
                  </Link>
                </li>
              )
            })}
            <li>
              <a
                className=" text-[#52a5f1] text-lg relative md:absolute md:top-3 right-0"
                title=""
              >
                Trở thành giáo viên
              </a>
            </li>
          </ul>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default MenuPopsKidLearn
