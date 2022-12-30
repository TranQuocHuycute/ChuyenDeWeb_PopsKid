import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function Schedule() {
  const { userId } = useParams()

  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/user/course/${userId}`)
      .then(function (response) {
        setSchedule(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    schedule.length > 0 && (
      <div className="my-[200px] mx-[100px] ">
        <div className="">
          <h1 className="md:text-4xl font-bold">Lịch học của bạn</h1>
          {schedule.map((e) => {
            return (
              <div>
                <Link
                  to={`/courseDetails/${e.id}`}
                  className="m-10 md:m-0  block md:flex justify-center items-center md:px-3 md:h-[184px]  md:my-3 rounded-xl"
                >
                  <div className="md:w-[20%] ">
                    <img className="rounded-lg " src={e.thumbnail}></img>
                  </div>

                  <div className="md:w-[80%] flex-col md:ml-5">
                    <span className="rounded-3xl bg-[#ff5c5c29] text-red-600 text-xs py-1 px-3 font-bold">
                      {e.age} tuổi
                    </span>
                    <p className="font-medium text-xl ">{e.title}</p>
                  </div>
                </Link>

                <div className=" border-4 rounded-3xl w-full h-full flex justify-center align-center items-center pb-2">
                  <div className="md:grid md:grid-cols-3 md:gap-3 ">
                    {e.classSchedules.length > 0 &&
                      e.classSchedules.map((a) => {
                        return (
                          <div key={a.id}>
                            <div className="pb-16 text-black bg-[#f9f9f9] rounded-md">
                              <div className="rounded-md">
                                <div className="learningcard-item relative w-72 h-72 snap-start rounded-md">
                                  <div className="m-10">
                                    {/* Buổi */}
                                    <div className="flex items-start justify-start pt-10">
                                      <h5 className="text-sm font-black dark:text-white">
                                        <span className="bg-[#ff5c5c29] text-[#ff5c5c] text-[12px]  mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 orange:text-orange-800">
                                          1 Khóa-{a.numberSessions} buổi
                                        </span>
                                      </h5>
                                    </div>
                                    {/* Thời gian học */}
                                    <div>
                                      <h3 className="pt-2 font-bold text-[#20px] text-black">
                                        {a.time}
                                      </h3>
                                    </div>
                                    {/* thời gian bắt đầu */}
                                    <div className="flex flex-row items-center mt-2 mb-10">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                        />
                                      </svg>
                                      <h3 className=" text-sm text-[#707070]">
                                        {e.startTime}
                                      </h3>
                                    </div>
                                    <div className="border-t border-black"></div>

                                    <div className="border-t border-[#fff] py-4">
                                      <h3 className="text-sm font-bold text-red-500">
                                        {e.note}
                                      </h3>
                                    </div>
                                    <p className="border-t border-black">
                                      Đường dẫn vào google meet
                                    </p>
                                    {e.classSchedules.map((c) => (
                                      <a className = "text-blue-600" href={c.urlMeeting}>{c.urlMeeting}</a>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  )
}

export default Schedule
