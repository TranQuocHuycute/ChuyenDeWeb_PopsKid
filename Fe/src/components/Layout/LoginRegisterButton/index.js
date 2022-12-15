import { Link } from "react-router-dom"

function LoginRegisterButton() {
  return (
    <div className=" flex py-4 px-5 justify-between border-t">
      <Link
        className="text-lg ml-2 py-[6px] w-full uppercase text-center text-[#09ccc7] border-[#09ccc7] border rounded-3xl"
        to = '/login'
      >
        Đăng nhập
      </Link>
      <Link
        className="text-lg ml-2 py-[6px] uppercase w-full text-center text-white bg-[#09ccc7] border-[#09ccc7] border rounded-3xl"
        to = '/register'
      >
        Đăng ký
      </Link>
    </div>
  )
}

export default LoginRegisterButton
