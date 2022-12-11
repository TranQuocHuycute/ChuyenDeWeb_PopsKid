import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import LoginFbOrGG from '../../components/Layout/LoginAndRegisterLayout/LoginFbOrGG'
import { useForm } from 'react-hook-form'
function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [values, setValues] = useState({
    showPassword: false,
    showRePassword: false,
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  //handleClickShowRePassword
  const handleClickShowRePassword = () => {
    setValues({ ...values, showRePassword: !values.showRePassword })
  }

  console.log('emailValue', register('email'))

  return (
    <div className="w-auto mx-4 my-4 md:mx-[70px] md:my-[50px]">
      <h1 className="font-bold text-2xl md:text-4xl text-center text-[#06afc3]  mb-4">
        Đăng ký
      </h1>
      <p className="mb-7 text-center text-[#808080]">
        Tạo tài khoản mới hoặc bạn có thể đăng nhập bằng tài khoản POPS.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="email pt-3 block ">
          <input
            className="rounded-3xl input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
            type="text"
            name="email"
            placeholder="Nhập số điện thoại hoặc email"
            {...register('email', {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}|([0-9]{10})$/,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <p className="errorMsg text-base min-h-[1rem]  ml-2  text-[#ea3c2a]">
              Nhập thông tin ở đây
            </p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className="errorMsg text-base min-h-[1rem] ml-2 text-[#ea3c2a]">
              Email không hoặc số điện thoại đúng định dạng. Vui lòng kiểm tra
              lại.
            </p>
          )}
        </div>
        {/* password */}
        <div className="password_2 block pt-6 relative">
          <div className="eye_div">
            <input
              className="input rounded-3xl block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
              type={values.showPassword ? 'text' : 'password'}
              placeholder="Mật khẩu"
              {...register('password', {
                required: true,
                minLength: 6,
              })}
            />

            {errors.password && errors.password.type === 'required' && (
              <p className="errorMsg text-base min-h-[1rem]  ml-2  text-[#ea3c2a]">
                {' '}
                Nhập thông tin ở đây{' '}
              </p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p className="errorMsg text-base min-h-[1rem]  ml-2  text-[#ea3c2a]">
                Nên đặt mật khẩu hơn 6
              </p>
            )}

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

        {/* repassword */}

        <div className="password_2 block pt-6 relative">
          <div className="eye_div">
            <input
              className="input rounded-3xl block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
              type={values.showRePassword ? 'text' : 'password'}
              {...register('repassword', {
                required: true,
                minLength: 6,
              })}
              placeholder="Xác nhận mật khẩu"
            />
            {errors.password && errors.password.type === 'required' && (
              <p className="errorMsg text-base min-h-[1rem]  ml-2  text-[#ea3c2a]">
                Nhập thông tin ở đây
              </p>
            )}
            {watch('repassword') !== watch('password') ? (
              <p className="errorMsg text-base min-h-[1rem]  ml-2  text-[#ea3c2a]">
                Xác nhận mật khẩu không đúng
              </p>
            ) : (
              ''
            )}
            <div
              className="icon_button absolute right-4 top-9"
              onClick={handleClickShowRePassword}
            >
              {values.showRePassword ? (
                <EyeIcon className="h-6 font-extralight" />
              ) : (
                <EyeSlashIcon className="h-6 font-extralight" />
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-9 rounded-3xl p-3 bg-[#02ccc5] hover:bg-opacity-80 text-white w-full text-sm"
        >
          Đăng ký
        </button>
      </form>

      <LoginFbOrGG title="Đã có tài khoản ?" status="Đăng kí" to="/login" />
    </div>
  )
}

export default Register
