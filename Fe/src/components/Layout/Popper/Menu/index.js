import React from 'react'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import { Wrapper as PopperWrapper } from '../../Popper'
import ItemMenu from './ItemMenu'
import LoginRegisterButton from '../../LoginRegisterButton'

function Menu({ children, items, profile }) {
  const renderItems = () => {
    return items.map((item, index) => <ItemMenu key={index} data={item} />)
  }

  return (
    <Tippy
      trigger="click"
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className=" flex items-center mx-4">
              <img className="flex-none w-11 h-11" src={profile} alt=""></img>
              <div className="grow h-14 mx-4">
                <p className="text-xs text-[#808080] mt-3 font-semibold">
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
            <div className="w-[26rem]">{renderItems()}</div>

            <LoginRegisterButton />
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
