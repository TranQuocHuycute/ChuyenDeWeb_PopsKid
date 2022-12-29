import dataLearningCard from './dataLearningCardDetail.json'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import images from '../../assets/images'
import LearningCard from '../../components/Layout/components/LearningCard'
import Carousel from 'react-grid-carousel'

function CourseDetails() {
  const [buttonA, setButtonA] = useState(false)
  const [buttonB, setButtonB] = useState(false)
  const [buttonC, setButtonC] = useState(false)
  const [buttonD, setButtonD] = useState(false)
  const [buttonE, setButtonE] = useState(false)
  return (
    <div className=" mt-[50px] md:mt-[100px] relative">
      {/* Trang chi tiết khóa học */}
      <div ref={dataLearningCard} className="bg-[#fff] sm:m-10 m-5">
        {dataLearningCard.KhoaHoc.map((KhoaHoc, index) => {
          return (
            <div key={index} className="">
              <div className="flex sm:flex-row justify-between">
                <div className="sm:w-2/3 w-full">
                  {/* tag */}
                  <div className="flex flex-row">
                    <div>
                      <h5 className="flex items-center text-[12px] xl:text-[20px] 2xl:text-[20px] font-black dark:text-white">
                        <span className="bg-pink-100 text-orange-800 text-sm font-black mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 orange:text-orange-800">
                          {KhoaHoc.tag}
                        </span>
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <a className="text-[#0079FF] text-[12px] xl:text-[20px] 2xl:text-[20px] font-bold">
                        {'HỌC THỬ'}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="sm:text-[32px] text-[12px] xl:text-[24px] 2xl:text-[24px] font-bold pb-2">
                      {KhoaHoc.title}
                    </p>
                  </div>
                  <div>
                    <a className="text-[#06AFC3] sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                      {KhoaHoc.namTeacher}
                    </a>
                  </div>

                  {/* rating */}
                  <div className="flex sm:flex-row flex-col sm:items-start items-start sm:my-4 sm:mb-5">
                    <div className="sm:mr-2 ">
                      <p className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                        ({KhoaHoc.TongSoDanhGia} {' đánh giá'})
                      </p>
                    </div>
                    <div className="sm: border-l-2 border-r-2">
                      <a className="text-[#06AFC3] sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] mx-2">
                        {'Xem đánh giá'}
                      </a>{' '}
                    </div>
                  </div>
                </div>
                {/*hinh giời thiệu */}
                <div className="sm:w-1/3 w-full flex items-center">
                  <div className="bg-auto">
                    <div ref={dataLearningCard}>
                      {dataLearningCard.KhoaHoc.map((KhoaHoc, index) => {
                        return (
                          <div key={index} className="pl-4">
                            <div className=" text-black rounded-md">
                              <div className="rounded-md">
                                <div className="learningcard-item relative sm:w-64 sm:h-32 w-32 h-16 snap-start rounded-md">
                                  {/* img */}
                                  <a
                                    href={KhoaHoc.link}
                                    className="sm:h-32 sm:w-64 h-16 w-32 aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-md"
                                    style={{
                                      backgroundImage: `url(${
                                        KhoaHoc.imageUrl || ''
                                      })`,
                                    }}
                                  >
                                    <img
                                      src={KhoaHoc.imageUrl || ''}
                                      alt={KhoaHoc.title}
                                      className="aspect-square hidden w-full rounded-md"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:max-w-[66%]">
                {/* Giá khóa học */}
                <div className="w-full flex sm:justify-start justify-center">
                  <p className="font-bold sm:text-[30px] text-[12px] xl:text-[30px] 2xl:text-[30px]">
                    {KhoaHoc.price} {' đ /Buổi'}
                  </p>
                </div>
                {/* mô tả */}
                <div className="sm:py-4">
                  <p className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                    {KhoaHoc.detail}
                  </p>
                </div>
              </div>

              <div className="flex flex-row flex-wrap w-full md:py-3 rounded-lg p-4 mb-8  bg-[#f9f9f9]">
                <div className="flex sm:w-1/3 w-full items-center md:my-1 items-baseline sm:mb-4 ">
                  <span className="inline-block w-6 h-6 mr-3">
                    <image src={images.tuoi} className="" />
                  </span>
                  <span class="text-base inline-block text-[#808080]">
                    {KhoaHoc.tag}
                    {' Tuổi'}
                  </span>
                </div>
                <div className="flex sm:w-1/3 w-full md:my-1 items-baseline sm:mb-4 ">
                  <span className="inline-block w-6 h-6 mr-3"></span>
                  <span class="text-base inline-block text-[#808080]">
                    {KhoaHoc.ThoiLuongTrenBuoi}
                    {' Phút/Buổi'}
                  </span>
                </div>
                <div className="flex md:w-1/3 w-full md:my-1 items-baseline sm:mb-4 ">
                  <span className="inline-block w-6 h-6 mr-3"></span>
                  <span class="text-base inline-block text-[#808080]">
                    {KhoaHoc.list}
                  </span>
                </div>
                <div className="flex md:w-1/3 w-full md:my-1 items-baseline sm:mb-4 ">
                  <span className="inline-block w-6 h-6 mr-3"></span>
                  <span class="text-base inline-block text-[#808080]">
                    {KhoaHoc.start}
                  </span>
                </div>
                <div className="flex md:w-1/3 w-full md:my-1 items-baseline sm:mb-4 ">
                  <span className="inline-block w-6 h-6 mr-3"></span>
                  <span class="text-base inline-block text-[#808080]">
                    {KhoaHoc.NgonNgu}
                  </span>
                </div>
                <div className="flex md:w-1/3 w-full md:my-1 items-baseline sm:mb-4 ">
                  <span className="inline-block w-6 h-6 mr-3"></span>
                  <span class="text-base inline-block text-[#808080]">
                    {KhoaHoc.ThoiLuongTrenTuan}
                    {' Buổi/Tuần'}
                  </span>
                </div>
              </div>
            </div>
          )
        })}

        {/*lich hoc*/}
        <div>
          <div className="flex justify-center align-center items-center sm:mt-10 mt-5">
            <span className="sm:text-[20px] text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold leading-8 mr-2">
              {'Lịch học'}
            </span>
          </div>
          <div className="flex justify-center align-center items-center">
            <div className="flex flex-row justify-items-center items-center">
              <span className="flex" href="...">
                <div className="mr-2 justify-center sm:flex-row flex-col items-center">
                  <span className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] mr-2">
                    {'Ba Mẹ không tìm thấy thời gian phù hợp, liên hệ'}
                    {''}
                  </span>
                  <a
                    href="..."
                    className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] font-bold  text-[#06AFC3]"
                  >
                    {'090.181.6890'}{' '}
                  </a>
                  <span className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]  mr-2">
                    {'để được tư vấn!'}
                  </span>
                </div>
              </span>
            </div>
          </div>
          {/* Thời gian học */}
          <div className="relative overflow-hidden pt-2">
            <div className="">
              <Carousel cols={3} rows={1} gap={1} loop>
                {dataLearningCard.LichHoc.map((LichHoc, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <div className="pl-4 pb-10">
                        <div className="pb-16 text-black bg-[#f9f9f9] rounded-md">
                          <div className="rounded-md">
                            <div className="learningcard-item relative w-72 h-72 rounded-md mx-auto">
                              <div className="m-5">
                                {/* Buoi */}
                                <div className="flex items-start justify-start pt-5">
                                  <h5 className="text-sm font-black dark:text-white">
                                    <span className="bg-[rgba(255,92,92,0.16)] text-[#ff5c5c] text-[12px]  mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 orange:text-orange-800">
                                      {LichHoc.buoi}
                                    </span>
                                  </h5>
                                </div>
                                {/* Thời gian học */}
                                <div>
                                  <a href={LichHoc.link} className="">
                                    <h3 className="pt-2 font-bold text-[#20px] text-black">
                                      {LichHoc.time}
                                    </h3>
                                  </a>
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

                                  <a href={LichHoc.link} className="pl-1">
                                    <h3 className="sm:text-[16px] text-[12px] font-bold text-[#707070]">
                                      {LichHoc.start}
                                    </h3>
                                  </a>
                                </div>

                                <div>
                                  {/* tối đa học viên */}
                                  <div className="border-t border-[#fff] py-4">
                                    <a href={LichHoc.link} className="">
                                      <h3 className="text-[18px] font-bold text-red-500">
                                        {LichHoc.list}
                                      </h3>
                                    </a>
                                  </div>
                                  {/* giá khóa học */}
                                  <div>
                                    <a href={LichHoc.link} className="py-4">
                                      <h3 className="pt-2 font-bold text-[20px]">
                                        {LichHoc.price}
                                        {' đ'}
                                      </h3>
                                    </a>
                                  </div>

                                  {/* đăng ký */}
                                  <div className="w-full flex justify-center align-center items-center px-2 py-4">
                                    <button className="bg-[#fff] text-[#06afc3] border border-[#06afc3]  font-bold py-2 px-3 rounded-full">
                                      <p className="mx-4">{'Đăng ký'}</p>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>

        {/* Thông tin thêm */}
        <div ref={dataLearningCard}>
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

        {/* Rating comment*/}
        <div className="sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto pb:-[10px]">
          <h2>
            <span className="text-[20px] md:text-[24px] font-bold">
              {'Đánh giá của phụ huynh'}
            </span>
          </h2>
          {/* sao trung bình */}
          <div ref={dataLearningCard}>
            {dataLearningCard.ratingTotal.map((ratingTotal, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center pb-[10px]"
                >
                  <div className="flex sm:flex-row flex-col sm:items-start items-start sm:my-4 sm:mb-5">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>

                  <span className="font-bold text-[#4b4b4b] text-base ml-2">
                    {ratingTotal.ratingTotal5}
                    <sub className="align-baseline text-base b-0">/5</sub>
                  </span>
                </div>
              )
            })}
          </div>
          {/* comment */}
          {/* Tên người đánh giá */}
          <div ref={dataLearningCard}>
            {dataLearningCard.rating.map((rating, index) => {
              return (
                <div key={index} className=" border-b border-[#f0f0f0] my-5">
                  {/* Tên */}
                  <div className="flex pb-5 items-center">
                    <span className="w-[48px] h-[48px] block rounded-full overflow-hidden">
                      <picture>
                        <source
                          srcSet={rating.imageUrlWeb}
                          type="image/webp"
                        ></source>
                        <source
                          srcSet={rating.imageUrl}
                          type="image/jpeg"
                        ></source>
                        <img
                          title={rating.title}
                          src={rating.imageUrl}
                          className="w-[48px] h-[48px]"
                        ></img>
                      </picture>
                    </span>
                    <div className="pl-4 text-base flex-1">
                      <span className="block font-bold">{rating.title}</span>
                      <span className="text-gray-dark"></span>
                    </div>
                  </div>

                  {/* số sao */}
                  <div className="flex sm:flex-row flex-col sm:items-start items-start sm:my-4 sm:mb-5">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
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
        <div className="flex">
          <p className="mx-auto font-bold text-xl text-[#02bcc4]">
            {'Có thể bạn quan tâm'}
          </p>
        </div>
        <LearningCard />
      </div>

      

      {/* Đăng ký */}
      <div
        ref={dataLearningCard}
        className="fixed bottom-0 left-0 right-0 flex w-full bg-[#f1f1f1]"
      >
        {dataLearningCard.KhoaHoc.map((KhoaHoc, index) => {
          return (
            <div
              key={index}
              className="sm:mx-10 my-5 m-5 flex justify-start items-center flex-row"
            >
              <div className="flex justify-start w-32 h-12 ">
                <button className="bg-[#02bcc4] rounded-md">
                  <Link
                    to="/registerCourse"
                    className="text-white font-bold sm:mx-5 text-[12px] xl:text-[20px] 2xl:text-[20px]"
                  >
                    {'ĐĂNG KÝ'}
                  </Link>
                </button>
              </div>
              <div className="sm:px-10 px-2 text-[#ff5c5c] text-[12px] xl:text-[20px] 2xl:text-[20px]  font-bold">
                <span className="">
                  ({KhoaHoc.time}){' - '}
                  {KhoaHoc.title}
                </span>
              </div>
              <div className="">
                <a
                  href="..."
                  className="font-bold sm:[12px] text-[#02bcc4] text-[12px] xl:text-[20px] 2xl:text-[20px]"
                >
                  {'Xem lịch học'}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default CourseDetails
