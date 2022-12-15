import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import LoginFbOrGG from '../../components/Layout/LoginAndRegisterLayout/LoginFbOrGG'
function Login() {
  const [emailValue, setEmailValue] = useState({
    email: '',
  })
  const [passValue, setPassValue] = useState({
    password: '',
    showPassword: false,
  })

  const [caretColor, setCaretColor] = useState('red')
  const [values, setValues] = useState({
    showPassword: false,
  })

  const handleEmailValue = (e) => {
    const { name, value } = e.target
    setEmailValue({
      ...emailValue,
      [name]: value,
    })
  }
  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value })
  }

  //handleClickShowPassword
  const handleClickShowPassword = () => {
    setCaretColor('transparent')
    setValues({ ...values, showPassword: !values.showPassword })
  }

  return (
    <div className="w-auto mx-4 my-4 md:mx-[70px] md:my-[50px]">
      <h1 className="font-bold text-2xl md:text-4xl text-center text-[#06afc3]  mb-4">
        Đăng nhập
      </h1>
      <p class="mb-7 text-center text-[#808080]">
        Bạn có thể đăng nhập với tài khoản
        <br />
        POPS Kids hoặc POPS.
      </p>

      <form action="">
        <div className="email pt-3 block ">
          <input
            className="rounded-3xl input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
            type="text"
            name="email"
            placeholder="Nhập số điện thoại hoặc email"
            value={emailValue.email}
            onChange={handleEmailValue}
          />
        </div>
        <div className="password_2 block pt-6 relative">
          <div className="eye_div">
            <input
              className="input rounded-3xl block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
              onClick={() => setCaretColor('black')}
              style={{ caretColor: caretColor }}
              type={values.showPassword ? 'text' : 'password'}
              onChange={handlePasswordChange('password')}
              value={values.password}
              placeholder="Mật khẩu"
            />
            <div
              className="icon_button absolute right-4 top-9"
              onClick={handleClickShowPassword}
            >
              {values.showPassword ? (
                <EyeIcon className="h-6 font-extralight" />
              ) : (
                <EyeSlashIcon className="h-6 font-extralight" />
              )}
            </div>
          </div>
        </div>
        {passValue.password !== '' ? (
          <button className="mt-9 rounded-3xl p-3 bg-[#02ccc5] hover:bg-opacity-80 text-white w-full text-sm">
            Đăng nhập
          </button>
        ) : (
          <button
            disabled
            className="mt-9 p-3 bg-[#c4c4c4]  rounded-3xl text-white w-full text-sm"
          >
            Đăng nhập
          </button>
        )}
        <p className="text-center mt-6 md:text-lg font-medium text-[#06afc3]">
          Quên mật khẩu ?
        </p>
      </form>

      <LoginFbOrGG title = 'Chưa có tài khoản ?' status = 'Đăng nhập' to= '/register'/>
    </div>
  )
}

export default Login
