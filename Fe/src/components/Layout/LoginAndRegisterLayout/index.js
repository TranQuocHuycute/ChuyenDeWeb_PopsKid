import React from 'react'
// import bgloginmb from '../../../assets/images/bg_login_mb.png'
import bglogimt from '../../../assets/images/bg-login_desktop.png'
// import logo from '../../../assets/images/logo.png'
function LoginAndRegisterLayout({ children }) {
  return (
    <div className="flex  justify-center relative min-h-[800px] bg-[#e5e7eb] ">
      {/* <div className="fixed ml-20 mt-6">
        <img src={logo} alt="logo" width="74px" height="48px"></img>
      </div> */}
      <div className="w-[520px] h-[826px] bg-white z-10">
        {/* login or register */}
        {children}
        {/* ---- */}
        <div className="mx-[70px] my-[50px]">
          <div className="flex mt-4 justify-around items-center">
            <div className="w-[30%] h-[1px] bg-[#969696]"></div>
            <div className="text-[#969696]">hoặc Tiếp tục với</div>
            <div className="w-[30%] h-[1px] bg-[#969696]"></div>
          </div>

          <div className="flex items-center justify-center my-6">
            <div className="bg-[#e5e7eb] p-3 mx-6 rounded-full">
              <img
                src="https://icon-library.com/images/fb-icon-small/fb-icon-small-21.jpg"
                width="32px"
              ></img>
            </div>

            <div className="bg-[#e5e7eb] p-3 mx-6 rounded-full">
              <img
                src="https://theme.hstatic.net/200000118173/1000809265/14/icon-gg__login.png?v=331"
                width="32px"
              ></img>
            </div>
          </div>

          <p className="font-medium text-[#808080] text-center">
            Đã có tài khoản ?{' '}
            <span className=" text-[#06afc3] ">Đăng nhập</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0">
        <img src={bglogimt} alt="anh nen co co xanh"></img>
      </div>
    </div>
  )
}

export default LoginAndRegisterLayout
