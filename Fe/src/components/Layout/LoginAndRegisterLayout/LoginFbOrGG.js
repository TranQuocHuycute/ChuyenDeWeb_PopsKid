import { Link } from 'react-router-dom'
function LoginFbOrGG({ title, status, to }) {
  return (
    <div>
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
        {title}{' '}
        <Link to={to}>
          <span className=" text-[#06afc3] ">{status}</span>
        </Link>
      </p>
    </div>
  )
}

export default LoginFbOrGG
