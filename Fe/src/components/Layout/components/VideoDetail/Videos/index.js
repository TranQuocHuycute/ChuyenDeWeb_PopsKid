// import datavideo from "./datavideo.json";
// import * as Ci from "react-icons/ci";
// import * as Ai from "react-icons/ai";
import { useState } from 'react'

function Videos() {
  const [isLike, setIsLike] = useState(false)

  const handleLike = () => {
    console.log('OK')
    setIsLike(!isLike)
  }
  return (
    <div>
      {/* video */}
      <div className="pt-5">
        {/* <iframe class="w-full aspect-video ..." src="https://www.youtube.com/watch?v=01djTx99H3E"></iframe> */}
        <div className=" mx-10 xl:mx-16 2xl:mx-16 bg-[#000]">
          <div className="flex justify-center">
            {/* <video
              preload="auto"
              width="720"
              height="480"
              controls
            >
              <source src="./Videos/video.mp4" type="video/mp4"></source>
            </video> */}
            <iframe
              className="w-full max-h-96 aspect-video"
              allowFullScreen="true"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
            >
              youtube
            </iframe>
          </div>
        </div>
      </div>

      {/* Hiển thị hot seriesseries hashcode */}
      <div className="flex content-center md:pl-5 sm:pl-2">
        <div className="w-11/12">
          <div className="flex flex-row justify-start pt-10 px-10">
            <div className="">
              <a className="flex" href="..">
                <div className="flex content-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                  <p className="text-red-600 font-bold text-2xl pl-2 ">
                    Doraemon
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* yeu thich */}
          <div className="px-10 flex justify-end">
            <button onClick={handleLike}>
              {isLike ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.909C12.28 21.0303 11.72 21.0303 11.38 20.909C8.48 19.9079 2 15.7315 2 8.65281C2 5.52809 4.49 3 7.56 3C9.38 3 10.99 3.88989 12 5.26517C13.01 3.88989 14.63 3 16.44 3C19.51 3 22 5.52809 22 8.65281C22 15.7315 15.52 19.9079 12.62 20.909Z"
                    fill="#FF5C5C"
                    stroke="#FF5C5C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.909C12.28 21.0303 11.72 21.0303 11.38 20.909C8.48 19.9079 2 15.7315 2 8.65281C2 5.52809 4.49 3 7.56 3C9.38 3 10.99 3.88989 12 5.26517C13.01 3.88989 14.63 3 16.44 3C19.51 3 22 5.52809 22 8.65281C22 15.7315 15.52 19.9079 12.62 20.909Z"
                    fill="none"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                //<Ai.AiTwotoneHeart size={20} color="red" />
              )}
            </button>

            <button className="w-6 h-6"></button>
          </div>
          {/* Tên tập phim đc chuyền qua từ carousel hashcode */}
          <div className=" px-10 ">
            <p className="text-xl xl:text-2xl 2xl:text-3xl font-bold pb-10 border-b-2">
              Doraemon S10 - Tập 469: Kỳ nghỉ hè với mấy con ma
            </p>
          </div>

          {/* dis hashcode */}
          <div className="pt-10 flex px-10 ">
            <div className="flex flex-col xl:flex-row 2xl:flex-row">
              <div className="max-w-sm flex pb-10">
                <div className="w-64">
                  {/* Thể loại */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Thể Loại:{' '}
                      <a className="text-red-600" href="...">
                        Giả Tưởng
                      </a>
                    </p>
                  </div>
                  {/* Nước sản xuất */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Nước Sản Xuất:{' '}
                      <a className="text-red-600" href="...">
                        Japan
                      </a>
                    </p>
                  </div>
                  {/* Năm phát hành */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Năm Phát Hành:{' '}
                      <span className="text-black">{'2013'}</span>
                    </p>
                  </div>
                  {/* Thời lượng */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Thời Lượng:{' '}
                      <span className="text-black">{'24 mins'}</span>
                    </p>
                  </div>
                  {/* xếp hàng */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Xếp Hạng: <span className="text-black">{'7+'}</span>
                    </p>
                  </div>
                  {/* Danh mục */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Danh Mục:{' '}
                      <a className="text-red-600" href="...">
                        Hoạt hình
                      </a>
                    </p>
                  </div>
                  {/* ND bơi */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Nội Dung Bởi:{' '}
                      <span className="text-black">TV Asahi VN</span>
                    </p>
                  </div>
                </div>
              </div>

              {/*Mô tả*/}
              <div className="max-w-screen-lg pr-10">
                <div className="w-full">
                  <div className="flex flex-row">
                    <p className="text-neutral-500">
                      Mô tả: {''}
                      <span className="text-black">
                        {
                          'Cùng vui chơi mỗi ngày và khám phá những điều mới mẻ với Shakir và các bạn động vật vui nhộn trong bộ phim hoạt hình Chuyện Của Muông Thú nào các bé ơi! Bên cạnh những tình huống thường ngày hài hướcác!'
                        }
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Videos