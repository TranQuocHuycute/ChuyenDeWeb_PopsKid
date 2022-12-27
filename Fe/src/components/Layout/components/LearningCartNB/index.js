import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const LearningCardNB = () => {
  const [featuredCourses, setFeaturedCourses] = useState([])
  console.log('featuredCourses', featuredCourses)
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/courses')
      .then(function (response) {
        setFeaturedCourses(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className="learningcard mt-12 mx-6 xl:mx-16 2xl:mx-16 ">
      {/* Pha doa cung */}
      <div className="flex justify-center align-center items-center pb-2">
        <div className="flex flex-row justify-items-center items-center">
          {/* icon */}
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="48px"
              height="48px"
            >
              <path
                fill="#D6E5E5"
                d="M363.8,224.7c-0.8,0-1.5,0.1-2.3,0c-3.1,0-6.1-0.7-9.1-1.3c-7.2-1.6-14.3-2.5-21.7-3.1c-12.9-1-25.9-1.4-38.8-1.7c-0.4,0-0.7-0.1-1.1-0.1c-1.3,0.1-2.6-0.2-3.8-1.3c-4.4-3.8-6.4-10.6-8.3-15.8c-2.7-7.4-5.9-14.6-8.9-21.9c-3.7-8.9-8.7-16.6-13.5-24.9c-1-1.7-2-3.5-3-5.3c-0.5,1.3-0.9,2.6-1.3,3.7c-1.2,3.3-2.4,6.4-4.2,9.4c-4.2,7.2-9,14.1-13,21.4c-6.3,11.4-10.8,25.2-22,32.8c-2,1.3-4,1.1-5.5,0c-0.5,0.6-1.2,1.1-2.1,1.4c-12.3,4.8-26,3-38.8,3.1c-13.9,0-27.7,0.3-41.5,0.1c5.1,9.7,16.3,16.9,24,23.8c11.8,10.5,20.4,24.4,28.8,37.7c0.3,0.5,0.6,1.1,0.7,1.6c1.3,0.7,2.2,2.1,2.1,4.1c-0.6,15-5.7,28.6-10.3,42.8c-2,6.1-3.8,12.2-6,18.3c-0.9,2.5-1.9,5.1-2.8,7.8c6.9-3.6,13.9-6.8,21-9.9c19.4-8.5,38.6-17.5,58.5-24.9c1.1-1,2.6-1.6,4.4-1.4c13.7,1.9,25.5,10.7,37.5,16.9c12.9,6.7,26.3,12.2,39.8,17.5c-3.7-9-6.1-18.8-8.4-28.1c-3.4-13.9-7.4-27.7-6-42.1c0-1.2,0.3-2.4,1.3-3.5c16.7-19.5,36.4-35.9,54-54.5C363.8,226.3,363.7,225.5,363.8,224.7z"
              />
              <path
                fill="#CBDB2D"
                d="M465.8,174.8c-21.3-43.4-61.6-77.5-104.2-99c-42.8-21.7-92.3-33.1-140.1-25.5C142.6,62.7,66.1,120.6,43.6,198.2c0,0.9-0.2,1.7-0.7,2.6c-0.4,1.4-0.8,2.9-1.1,4.3c-0.5,1-1,2-1.4,3.1c-0.1,0.9-0.3,1.9-0.4,2.7c-0.9,4.1-2,8.2-2.7,12.3c-1.4,7.7-1.1,15.7-3.8,23c-0.2,2.1-0.5,4.2-0.8,6.3c0,0.3,0,0.5,0,0.7c-0.5,4.4-0.9,8.8-1.3,13.2c-0.8,9.2-1.2,18.4-1.1,27.6c0.3,18.1,2.4,36.2,6.9,53.7c8.7,33.3,25.5,64.8,52,87.3c18.2,15.5,39.5,25.7,62.4,32.3c25,7.3,51,11.4,77.1,11.5c51.5,0.1,103.2-13.9,145.6-43.7C452.7,379.9,511.8,268.2,465.8,174.8z M377,225.1c0.4,1.5,0.1,3.2-1.2,4.6c-18.2,20-39.2,37.2-56.9,57.6c0,0,0,0,0,0c-1.3,12.8,3,25.8,6.1,38.1c2.8,10.9,5.4,22.8,10.9,32.7c2.1,3.7-0.7,7.4-3.9,8c-1.5,1.5-3.7,2.4-6.1,1.4c-15.6-6.1-31.3-12.1-46.2-19.8c-10.7-5.6-21.5-13.7-33.6-16.2c-0.3,0.2-0.6,0.3-0.9,0.4c-19.1,7.1-37.5,15.7-56.2,23.8c-6.3,2.8-12.7,5.5-18.9,8.7c-2.7,1.4-5.5,2.8-8,4.5c-0.8,0.6-1.8,1.1-2.5,1.8c0,0-0.1,0.1-0.1,0.1c-1.3,6.1-10.7,3.9-10.2-2.3c0-0.3-0.1-0.6,0-1c0.7-12.2,6.3-23.8,10-35.3c4.4-14.1,10.3-28,11.1-42.9c-0.4-0.3-0.8-0.8-1.1-1.3c-9-14.3-18.2-28.1-31.2-39.2c-9.5-8.1-21.7-17.3-24.8-30c-2.4-3.1-1.3-8.6,3.6-8.4c16,0.5,32,0.1,48,0.1c12.3,0,25.8,2,37.6-2.6c1.7-0.7,3.2-0.4,4.3,0.3c0.2-0.2,0.5-0.4,0.8-0.6c5.8-3.9,9.1-10.6,12.2-16.7c3-6,6-11.9,9.5-17.6c4.6-7.3,9.9-14.6,12.9-22.7c2.2-6,4.3-11.8,9.3-16c0.8-0.6,1.5-1,2.2-1.1c2.1-1.1,4.7-0.7,6.6,1.8c0.5,0.6,0.7,1.4,1,2.2c0.4,1.2,0.4,2.3,0,3.3c1,4.5,4.6,9.1,6.8,12.7c4.2,6.8,8.1,13.6,11.1,21c2.9,7.1,6.1,14.1,8.7,21.2c1.3,3.6,2.5,9.1,5.1,12.4c14.1,0.4,28.2,0.8,42.3,2.1c8,0.7,15.5,2.3,23.4,3.7c6.2,1.1,11.9-0.4,17.9,2.3C380.8,218.2,379.9,223,377,225.1z"
              />
              <path d="M465.5,153.9c-25.2-40.4-65.9-71.6-108.7-91.6C313.5,42.1,263.9,32.8,216.5,41c-81.8,14.2-160,74.7-182.9,155.6c-3.3,5.5-3.8,13.1-5.2,19.2c-1,4.3-1.7,8.7-2.3,13.1c-0.1,0.4-0.1,0.9-0.2,1.3c-0.1,0.3-0.2,0.5-0.2,0.8c-0.8,4.2-1.5,8.4-2.1,12.6c0,0.1-0.1,0.1-0.1,0.2c-0.5,1.2-0.6,2.3-0.4,3.2c-1,8.1-1.7,16.2-2.3,24.3c-0.8,11.4-0.9,22.9-0.3,34.3c1.3,22.3,5.6,44.5,13.3,65.5c15.3,41.8,45.5,76.5,86.1,95.3c23.1,10.6,48.8,16.7,73.9,20c25.5,3.3,51.5,3.1,77-0.6c50.9-7.4,98.5-29.7,136.1-64.8c36.4-33.9,65-77.6,78.1-125.8C498.3,247.3,492,196.3,465.5,153.9z M374.2,435.1c-42.4,29.8-94.1,43.8-145.6,43.7c-26.1-0.1-52.1-4.2-77.1-11.5c-22.9-6.7-44.2-16.8-62.4-32.3c-26.5-22.5-43.3-54-52-87.3c-4.6-17.5-6.6-35.6-6.9-53.7c-0.2-9.2,0.2-18.4,1.1-27.6c0.4-4.4,0.8-8.8,1.3-13.2c0-0.2,0-0.5,0-0.7c0.3-2.1,0.6-4.2,0.8-6.3c2.7-7.3,2.4-15.4,3.8-23c0.8-4.1,1.8-8.2,2.7-12.3c0.2-0.8,0.3-1.7,0.4-2.7c0.4-1,0.9-2.1,1.4-3.1c0.4-1.4,0.7-2.9,1.1-4.3c0.5-0.9,0.8-1.8,0.7-2.6c22.6-77.6,99-135.5,177.9-147.9c47.9-7.6,97.3,3.8,140.1,25.5c42.6,21.5,82.8,55.7,104.2,99C511.8,268.2,452.7,379.9,374.2,435.1z" />
              <path d="M376.6,216.4c-6-2.7-11.7-1.2-17.9-2.3c-7.9-1.5-15.4-3-23.4-3.7c-14.1-1.3-28.2-1.7-42.3-2.1c-2.6-3.3-3.8-8.8-5.1-12.4c-2.6-7.2-5.8-14.2-8.7-21.2c-3.1-7.4-6.9-14.2-11.1-21c-2.2-3.6-5.9-8.1-6.8-12.7c0.3-0.9,0.4-2.1,0-3.3c-0.3-0.8-0.5-1.6-1-2.2c-1.9-2.5-4.6-2.8-6.6-1.8c-0.7,0.1-1.5,0.5-2.2,1.1c-5.1,4.2-7.1,10-9.3,16c-3,8.1-8.3,15.4-12.9,22.7c-3.6,5.7-6.5,11.6-9.5,17.6c-3,6-6.4,12.8-12.2,16.7c-0.3,0.2-0.6,0.4-0.8,0.6c-1.1-0.8-2.6-1-4.3-0.3c-11.7,4.6-25.3,2.6-37.6,2.6c-16,0-32,0.4-48-0.1c-4.9-0.1-6,5.4-3.6,8.4c3.1,12.8,15.3,22,24.8,30c13,11,22.2,24.8,31.2,39.2c0.3,0.5,0.7,1,1.1,1.3c-0.8,14.9-6.7,28.8-11.1,42.9c-3.6,11.5-9.3,23.2-10,35.3c0,0.4,0,0.7,0,1c-0.6,6.3,8.9,8.5,10.2,2.3c0,0,0.1-0.1,0.1-0.1c0.7-0.7,1.6-1.2,2.5-1.8c2.6-1.7,5.3-3.1,8-4.5c6.2-3.2,12.5-5.9,18.9-8.7c18.6-8.1,37.1-16.8,56.2-23.8c0.3-0.1,0.6-0.3,0.9-0.4c12.1,2.5,22.8,10.6,33.6,16.2c14.9,7.7,30.6,13.7,46.2,19.8c2.4,1,4.7,0.1,6.1-1.4c3.2-0.6,6-4.3,3.9-8c-5.6-9.9-8.2-21.8-10.9-32.7c-3.1-12.3-7.4-25.3-6.1-38.1c0,0,0,0,0,0c17.7-20.4,38.8-37.6,56.9-57.6c1.3-1.4,1.6-3.1,1.2-4.6C379.9,223,380.8,218.2,376.6,216.4z M309.9,281.6c-1,1.1-1.3,2.3-1.3,3.5c-1.4,14.4,2.6,28.2,6,42.1c2.3,9.3,4.6,19.1,8.4,28.1c-13.5-5.3-26.9-10.8-39.8-17.5c-12-6.2-23.8-15-37.5-16.9c-1.8-0.3-3.4,0.3-4.4,1.4c-19.8,7.4-39.1,16.4-58.5,24.9c-7.1,3.1-14.2,6.3-21,9.9c0.9-2.7,1.8-5.3,2.8-7.8c2.2-6.1,4-12.2,6-18.3c4.6-14.1,9.6-27.8,10.3-42.8c0.1-2-0.8-3.4-2.1-4.1c-0.1-0.5-0.4-1.1-0.7-1.6c-8.3-13.3-17-27.1-28.8-37.7c-7.7-6.9-19-14.1-24-23.8c13.9,0.2,27.7,0,41.5-0.1c12.8,0,26.5,1.7,38.8-3.1c0.9-0.3,1.5-0.8,2.1-1.4c1.5,1,3.5,1.3,5.5,0c11.3-7.6,15.7-21.4,22-32.8c4-7.3,8.9-14.1,13-21.4c1.8-3,3-6.1,4.2-9.4c0.4-1.1,0.8-2.4,1.3-3.7c1,1.9,2.1,3.6,3,5.3c4.8,8.3,9.8,16,13.5,24.9c3,7.3,6.2,14.5,8.9,21.9c1.9,5.2,3.9,12,8.3,15.8c1.2,1,2.5,1.4,3.8,1.3c0.3,0.1,0.7,0.1,1.1,0.1c12.9,0.4,25.9,0.8,38.8,1.7c7.4,0.6,14.5,1.5,21.7,3.1c3,0.7,6,1.3,9.1,1.3c0.7,0,1.5,0,2.3,0c-0.1,0.8-0.1,1.6,0.1,2.4C346.4,245.7,326.6,262.2,309.9,281.6z" />
            </svg>
          </div>

          <a className="flex" href="...">
            {/* tên phim */}
            <div className="mr-2 justify-center flex-row items-center">
              <span className="text-2xl xl:text-3xl 2xl:text-4xl leading-8 font-bold text-[#06AFC3] mr-2">
                Khóa học
              </span>
              <span className="text-2xl xl:text-3xl 2xl:text-4xl leading-8 font-bold text-[#EA6016]">
                nổi bật
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* learningcard */}
      <div className=" pt-2 flex justify-center align-center items-center pb-2">
        <div ref={featuredCourses} className="flex flex-col sm:flex-row">
          {featuredCourses.slice([0], [5]).map((courses) => {
            return (
              <div key={courses.id} className="pl-2 sm:pl-10 pb-8">
                <div className="pb-16 text-black bg-[#fff] rounded-md">
                  <div className="rounded-md">
                    <div className="learningcard-item relative w-72 h-80 snap-start rounded-md">
                      {/* img */}
                      <Link
                        
                        className="h-40 w-72 aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-md"
                        style={{
                          backgroundImage: `url(${courses.thumbnail || ''})`,
                        }}
                      >
                        <img
                          src={courses.thumbnail || ''}
                          alt={courses.title}
                          className="aspect-square hidden w-full rounded-md"
                        />
                      </Link>

                      {/* tag */}
                      <h5 className="pl-2 pt-2 flex items-center text-sm font-black dark:text-white">
                        <span class="bg-[#ff5c5c29] text-[#ff5c5c] text-[12px]  mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 orange:text-orange-800 ml-2">
                          {courses.age}  tuổi
                        </span>
                      </h5>

                      <div className="pl-5 w-72 ">
                        {/* ten khoa hoc */}
                        <a
                          href={courses.link}
                          className="aspect-square block absolute transition-opacity z-10"
                        >
                          <h3 className="mx-auto text-[20px] font-bold text-[#242424]">
                            {courses.title}
                          </h3>
                        </a>

                        {/* rating */}
                        <div class="pt-20 flex items-center">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>

                        {/* detail */}
                        <a
                 
                          className="aspect-square block absolute transition-opacity z-10"
                        >
                          <h3 className="pt-2 font-normal mx-auto text-sm pr-4 text-[#707070]">
                            {courses.description.slice(0,105)} ...
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Xem Them */}
      <div className=" w-full flex justify-center align-center items-center">
        <button class="bg-[#fff] text-[#06afc3] border border-[#06afc3]  font-bold py-2 px-3 rounded-full">
          <p className="mx-14">Xem Thêm</p>
        </button>
      </div>
    </div>
  )
}

export default LearningCardNB
