import React from 'react'
import bglogimt from '../../../assets/images/bg-login_desktop.png'

function LoginAndRegisterLayout({ children }) {
  return (
    <div className="flex justify-center relative min-h-[800px] md:bg-[#e5e7eb] ">
      <div className="w-[520px] h-auto bg-white z-10 rounded-2xl my-8">
        {/* login or register */}
        {children}
        {/* ---- */}
        
      </div>

      <div className="absolute bottom-0">
        <img src={bglogimt}  alt="anh nen co co xanh"></img>
      </div>
    </div>
  )
}

export default LoginAndRegisterLayout
