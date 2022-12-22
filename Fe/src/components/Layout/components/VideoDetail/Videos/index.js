import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router'
import axios from 'axios'

function Videos() {
  const { video } = useParams()
  const { eps } = useParams()

  const Video = () => {
    const [videos, setVideos] = useState()
    const [isLike, setIsLike] = useState(false)

    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/videos/${video}/${eps}`)
        .then(function (response) {
          // handle success

          setVideos(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }, [])

    const handleLike = () => {
      setIsLike(!isLike)
    }

    return (
      videos !== undefined && (
        <div>
          {/* video */}
          <div className="md:pt-5">
            <div className=" md:mx-10 xl:mx-16 2xl:mx-16 bg-[#000]">
              <div className="flex justify-center">
                <ReactPlayer
                  className="react-player"
                  url={videos.url}
                  width="100%"
                  height="500px"
                  controls
                  // playing
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className=" px-10 mt-5 ">
              <p className="text-xl xl:text-2xl 2xl:text-3xl font-bold pb-10 border-b-2">
                {videos.title}
              </p>
            </div>
            <div className="px-10">
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )
    )
  }

  const MovieInfo = () => {
    const [movie , setMovie] = useState()
    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/videos/${video}`)
        .then(function (response) {
          // handle success
          console.log('moviessssss' , response.data);
          setMovie(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }, [])

    return (
      movie !== undefined &&
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
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                  <p className="text-red-600 font-bold text-2xl pl-2 ">
                    {movie.title}
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* yeu thich */}

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
                      <span className="text-black">{movie.release_year}</span>
                    </p>
                  </div>
                  {/* Thời lượng */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Thời Lượng:{' '}
                      <span className="text-black">{movie.time}mins</span>
                    </p>
                  </div>
                  {/* xếp hàng */}
                  <div className="flex flex-row pb-2">
                    <p className="text-neutral-500">
                      Xếp Hạng: <span className="text-black">{movie.rating}</span>
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
                      <span className="text-black">{movie.content_by}</span>
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
      
    )
  }

  return (
    <div>
      <Video />
      <MovieInfo />
    </div>
  )
}
export default Videos
