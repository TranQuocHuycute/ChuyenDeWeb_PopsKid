import dataLearningCard from './dataLearningCardDetail.json'
import images from '../../assets/images'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import formatCash from '../../hooks/formatCash'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import CommentFrom from '../../components/Layout/CommentForm'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

function CourseDetails() {
  const { courseId } = useParams()
  const navigate = useNavigate()

  const [courseDetails, setCourseDetails] = useState()
  const [user, setUser] = useState([])
  const [teacher, setTeacher] = useState()
  const [rating, setRating] = useState([])

  const [username, setUsername] = useState()
  console.log('username', username)

  useEffect(() => {
    if (Cookies.get('authToken') !== undefined) {
      const json = jwtDecode(Cookies.get('authToken'))
      setUsername(json)
    }
  }, [])

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/courses/${courseId}`)
      .then(function (response) {
        setCourseDetails(response.data)
        setRating({
          data: response.data.ratings,
          ratingTotal:
            Math.round(
              (response.data.ratings
                .map((e) => e.numberRating)
                .reduce((a, b) => a + b, 0) /
                response.data.ratings.length) *
                10
            ) / 10,
        })
        setUser(response.data.users)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (user.length > 0) {
      user.map((e) => {
        e.roles.map((c) => {
          if (c.name === 'ROLE_TEACHER') {
            setTeacher({ nameTeacher: e.name })
          }
        })
      })
    }
  }, [user])

  const openRegisterCouse = () => {
    if (Cookies.get('authToken') !== undefined) {
      navigate('/registerCourse', { state: { courseDetails } })
    } else navigate({ pathname: '/login' })
  }

  const subjectInfo = [
    courseDetails && {
      icon: '',
      content: 'Tuổi ' + courseDetails.age,
    },
    courseDetails && {
      icon: '',
      content: courseDetails.time + ' Phút/Buổi',
    },
    courseDetails && {
      icon: '',
      content: 'Tối đa ' + courseDetails.numberPeople + ' Học Viên',
    },
    courseDetails && {
      icon: '',
      content: courseDetails.language,
    },
    courseDetails && {
      icon: '',
      content: courseDetails.classPeriod + ' Buổi/Tuần',
    },
  ]

  const [buttonA, setButtonA] = useState(false)
  const [buttonB, setButtonB] = useState(false)
  const [buttonC, setButtonC] = useState(false)
  const [buttonD, setButtonD] = useState(false)
  const [buttonE, setButtonE] = useState(false)

  return (
    courseDetails && (
      <div className=" mt-[50px] md:mt-[100px] relative">
        {/* Trang chi tiết khóa học */}
        <div className="bg-[#fff] sm:m-10 m-5">
          {/* Thong tin khoa hoc */}
          <div className="">
            {/* Thông tin khóa học */}
            <img
              className=" md:hidden rounded-2xl h-[200px]"
              src={courseDetails.thumbnail}
            ></img>
            <div className="flex sm:flex-row justify-between">
              <div className="md:w-2/3 w-full">
                {/* tag */}
                <div className="flex flex-row">
                  <div>
                    <h5 className="flex items-center text-[12px] xl:text-[20px] 2xl:text-[20px] font-black dark:text-white">
                      <span className="bg-pink-100 text-orange-800 text-sm font-black mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 orange:text-orange-800">
                        {courseDetails.age} tuổi
                      </span>
                    </h5>
                  </div>
                </div>
                <div>
                  <p className="sm:text-[32px] text-[12px] xl:text-[24px] 2xl:text-[24px] font-bold pb-2">
                    {courseDetails.title}
                  </p>
                </div>
                <div>
                  <a className="text-[#06AFC3] sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                    {teacher && teacher.nameTeacher}
                  </a>
                </div>

                {/* rating */}
                <div className="flex sm:flex-row flex-col sm:items-start items-start sm:my-4 sm:mb-5">
                  <div className="flex items-center">
                    <img src={images.searchIsActive}></img>
                  </div>
                  <div className="sm:mx-2 ">
                    <p className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                      {rating.length} / Đánh giá
                    </p>
                  </div>
                  <div className="sm: border-l-2 border-r-2">
                    <a className="text-[#06AFC3] sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] mx-2">
                      Xem đánh giá
                    </a>{' '}
                  </div>
                </div>
              </div>
              {/*hinh giời thiệu */}
              <img
                className="hidden md:block md:w-[350px] rounded-2xl md:mr-[60px]"
                src={courseDetails.thumbnail}
              ></img>
            </div>

            <div className="sm:max-w-[66%]">
              {/* Giá khóa học */}
              <div className="w-full flex sm:justify-start justify-center">
                <p className="font-bold sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                  {formatCash(courseDetails.price + '')} đ /Buổi
                </p>
              </div>
              {/* mô tả */}
              <div className="sm:py-4">
                <p className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                  {courseDetails.contentCurriculum}
                </p>
              </div>
            </div>
          </div>

          {/*6*/}
          <div className="flex justify-center items-center sm:flex-col bg-[#edfdfe] rounded-md">
            {/* 1 */}
            <div className="flex sm:justify-center justify-start items-center p-5 self-center">
              <div className="grid  grid-cols-1 gap-1 md:grid-cols-3 md:gap-3">
                {subjectInfo.map((resource, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center items-center "
                    >
                      <div className=" justify-center items-center">
                        <div className=" text-black rounded-2xl">
                          <div className="rounded-2xl ">
                            <div className="learningcard-item relative w-40 sm:w-80 snap-start rounded-2xl">
                              {/* title */}
                              <div className="flex flex-row sm:justify-center justify-start items-center text-center ">
                                <h5 className="text-[12px] xl:text-[20px] 2xl:text-[20px]  font-bold text-[#374751] sm:px-[16px] px-2">
                                  {resource.content}
                                </h5>
                              </div>
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

          {/*lich hoc*/}
          <div className="flex justify-center align-center items-center sm:mt-10 mt-5">
            <span className="sm:text-[20px] text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold leading-8 mr-2">
              Lịch học
            </span>
          </div>
          <div className="flex justify-center align-center items-center">
            <div className="flex flex-row justify-items-center items-center">
              <span className="flex" href="...">
                <div className="mr-2 justify-center sm:flex-row flex-col items-center">
                  <span className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] mr-2">
                    Ba Mẹ không tìm thấy thời gian phù hợp, liên hệ{''}
                  </span>
                  <a
                    href="..."
                    className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] font-bold  text-[#06AFC3]"
                  >
                    090.181.6890{' '}
                  </a>
                  <span className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]  mr-2">
                    để được tư vấn!
                  </span>
                </div>
              </span>
            </div>
          </div>
          {/* Thời gian học */}
          <div className="flex justify-center align-center items-center pb-2">
            <div className="md:grid md:grid-cols-3 md:gap-3 ">
              {courseDetails.classSchedules.map((resource, index) => {
                return (
                  <div key={index} className="">
                    <div className="pb-16 text-black bg-[#f9f9f9] rounded-md">
                      <div className="rounded-md">
                        <div className="learningcard-item relative w-72 h-72 snap-start rounded-md">
                          <div className="m-10">
                            {/* Buổi */}
                            <div className="flex items-start justify-start pt-10">
                              <h5 className="text-sm font-black dark:text-white">
                                <span className="bg-[#ff5c5c29] text-[#ff5c5c] text-[12px]  mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 orange:text-orange-800">
                                  1 Khóa-{resource.numberSessions} buổi
                                </span>
                              </h5>
                            </div>
                            {/* Thời gian học */}
                            <div>
                              <h3 className="pt-2 font-bold text-[#20px] text-black">
                                {resource.time}
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
                                {courseDetails.startTime}
                              </h3>
                            </div>
                            <div className="border-t border-black"></div>
                            {/* tối đa học viên */}
                            <div className="border-t border-[#fff] py-4">
                              <h3 className="text-sm font-bold text-red-500">
                                Tối đa {resource.maximumStudents} học viên
                              </h3>
                            </div>
                            {/* giá khóa học */}
                            <div>
                              <h3 className="pt-2 font-bold text-[20px]">
                                {formatCash(resource.price + '')} đ / khóa
                              </h3>
                            </div>

                            {/* đăng ký */}
                            <div className="w-full flex justify-center align-center items-center px-2 py-4">
                              <button className="bg-[#fff] text-[#06afc3] border border-[#06afc3]  font-bold py-2 px-3 rounded-full">
                                <p className="mx-4">Đăng ký</p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* collapse_root__L5u__edittor */}
          <div>
            {dataLearningCard.noidung.map((noidung, index) => {
              return (
                <div key={index}>
                  {/* Hoc vien se nhan dc gi */}
                  <div className="border-b border-[#f0f0f0] pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
                    <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
                      <div>
                        <p className="mr-4">{noidung.tenNoiDung1}</p>
                      </div>

                      {/* dấu mũi tên */}
                      <button onClick={() => setButtonA(!buttonA)}>
                        <span className="cursor-pointer inline-block sm:mt-1 w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
                      </button>
                    </div>
                    {/* .THu nhỏ */}
                    {buttonA ? (
                      <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
                        <ul>
                          <li>
                            <span className="font-normal text-[14pt]">
                              {noidung.dataNoiDung1}
                            </span>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {/* Noi dung va giao trinh */}
                  <div className="border-b border-[#f0f0f0] pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
                    <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
                      <p className="mr-4">{noidung.tenNoiDung2}</p>
                      <button onClick={() => setButtonB(!buttonB)}>
                        <span className="cursor-pointer sm:mt-1 inline-block w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
                      </button>
                    </div>
                    {buttonB ? (
                      <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
                        <ul>
                          <li>
                            <span className="font-normal text-[14pt]">
                              {noidung.dataNoiDung2}
                            </span>
                          </li>{' '}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {/* Tài liệu và công cụ học tập */}
                  <div className="border-b border-[#f0f0f0] pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
                    <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
                      <p className="mr-4">{noidung.tenNoiDung3}</p>
                      <button onClick={() => setButtonC(!buttonC)}>
                        <span className="cursor-pointer inline-block sm:mt-1 w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
                      </button>
                    </div>
                    {buttonC ? (
                      <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
                        <ul>
                          <li>
                            <span className="font-normal text-[14pt]">
                              {noidung.dataNoiDung3}
                            </span>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {/* Lưu ý */}
                  <div className="border-b border-[#f0f0f0] pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
                    <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
                      <p className="mr-4">{noidung.tenNoiDung4}</p>
                      <button onClick={() => setButtonD(!buttonD)}>
                        <span className="cursor-pointer inline-block sm:mt-1 w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
                      </button>
                    </div>
                    {buttonD ? (
                      <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
                        <ul>
                          <li>
                            <span className="font-normal text-[14pt]">
                              {noidung.dataNoiDung4}
                            </span>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {/* Thông tin về giáo viên */}
                  <div className="border-b border-[#f0f0f0] pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
                    <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
                      <p className="mr-4">{noidung.tenNoiDung5}</p>
                      <button onClick={() => setButtonE(!buttonE)}>
                        <span className="cursor-pointer inline-block sm:mt-1 w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
                      </button>
                    </div>
                    {buttonE ? (
                      <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
                        <img
                          className="block ml-auto mr-auto"
                          src={noidung.imgNoiDung5}
                          alt
                          width="200"
                          height="243"
                        />

                        <ul>
                          <li>
                            <span className="font-normal text-[14pt]">
                              {noidung.dataNoiDung5}
                            </span>
                          </li>
                        </ul>

                        <button>
                          <span className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] font-bold  text-[#06AFC3]">
                            Xem các khóa học khác của Học Viện {'>'}
                          </span>
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Rating list_root__kpG6B*/}
          <div className="sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto pb:-[10px]">
            <h2>
              <span className="text-[20px] md:text-[24px] font-bold">
                Đánh giá của phụ huynh
              </span>
            </h2>

            <Rating initialValue={1} readonly iconsCount={1} />
            <span className="font-medium text-lg">{rating.ratingTotal}/5</span>
            {username !== undefined ? <CommentFrom userName={username.sub} /> : ''}

            <div className="mt-5">
              {rating.data.map((rating, index) => {
                return (
                  <div key={index} className=" border-b border-[#f0f0f0] my-5">
                    {/* Tên */}
                    <div className="flex pb-5 items-center">
                      <span className="w-[48px] h-[48px] block rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH6TfTtq91hzmeIvm_4JOdb5y1UWjTlYZdA&usqp=CAU"></img>
                      </span>
                      <div className="pl-4 text-base flex-1">
                        <span className="block font-bold">
                          {rating.username}
                        </span>
                        <span className="text-gray-dark"></span>
                      </div>
                    </div>

                    {/* số sao */}
                    <div className="flex sm:flex-row flex-col sm:items-start items-start sm:my-4 sm:mb-5">
                      {rating.numberRating}
                    </div>

                    {/* comment */}
                    <div className="pt-5 pb-5">
                      <div className="text-base whitespace-pre-wrap sm:text-[20px] text-[20px] xl:text-[24px] 2xl:text-[24px] overflow-hidden mr-2 relative inline">
                        {rating.comment}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Có thể bạn quan tâm */}
          <div className="learningcard mt-12 mx-6 xl:mx-16 2xl:mx-16">
            {/* Pha doa cung */}
            <div>
              <div className="flex flex-row justify-items-center items-center">
                <a className="flex" href="...">
                  {/* tên phim */}
                  <div className="mr-2">
                    <p className="text-xl xl:text-2xl 2xl:text-3xl leading-8 font-bold text-slate-700">
                      Có thể bạn quan tâm
                    </p>
                  </div>
                </a>
              </div>
            </div>
            {/* learningcard */}
          </div>
        </div>

        {/* Đăng ký */}
        <div className="fixed bottom-0 left-0 right-0 flex w-full bg-[#F9F9F9]">
          {dataLearningCard.resources4.map((resources4, index) => {
            return (
              <div
                key={index}
                className="sm:m-10 m-5 my-5 flex justify-start items-center flex-row"
              >
                <div className="flex justify-start w-32 h-12 ">
                  <button
                    onClick={openRegisterCouse}
                    className="bg-[#02bcc4] rounded-md"
                  >
                    <p className="text-white font-bold px-5 sm:px-2 text-[12px] xl:text-[20px] 2xl:text-[20px]">
                      ĐĂNG KÝ
                    </p>
                  </button>
                </div>
                <div className="px-10 text-[#ff5c5c] font-bold">
                  <span className="">
                    ({resources4.time}){' - '}
                    {resources4.name}
                  </span>
                </div>
                <div className="">
                  <a
                    href="..."
                    className="font-bold sm:[12px] text-[#02bcc4] text-[12px] xl:text-[20px] 2xl:text-[20px]"
                  >
                    Xem lịch học
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  )
}
export default CourseDetails
