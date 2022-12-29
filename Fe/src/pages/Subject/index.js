import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import formatCash from '../../hooks/formatCash'
import axios from 'axios'

function Subject() {
  const { courseCateId } = useParams()

  const [courseCategoryDetail, setCourseCategoryDetail] = useState()
  console.log('courseCategoryDetail', courseCategoryDetail)
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/courses/catalogs/${courseCateId}`)
      .then(function (response) {
        setCourseCategoryDetail(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const ReadMore = ({ children }) => {
    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
    }
    return (
      <div>
        <p className="md:block hidden">
          {isReadMore ? text.slice(0, 350) + ' ...' : text}
        </p>
        <p className="md:hidden">
          {isReadMore ? text.slice(0, 150) + ' ...' : text}
        </p>
        <span
          onClick={toggleReadMore}
          className="cursor-pointer inline-block mt-2 underline text-[#06afc3]"
        >
          {isReadMore ? 'Xem thêm' : 'Thu gọn'}
        </span>
      </div>
    )
  }

  const Introduce = ({ name, description, avatar }) => (
    <div>
      <div class="md:mt-3 mt-14 mb-3">
        <Link class=" text-[#06afc3] capitalize text-lg" to="/learn">
          Khám phá<span class="mx-1 text-gray-default">/</span>
        </Link>
        <span class="text-gray-400 text-lg">{name}</span>
      </div>
      <div className="md:bg-gray-100 block md:flex md:flex-wrap md:rounded-2xl md:text-xs md:px-12 md:py-8 md:mb-3 md:mt-8">
        <div className="w-[20%] ">
          <img
            className="rounded-full border-[#06afc3] border-2 md:mr-5"
            src={avatar}
            width="160px"
            height="160px"
          ></img>
        </div>
        <div className="w-[80%]  ">
          <h1 className="font-medium  text-xl md:text-3xl mt-2 mb-2">{name}</h1>
          <div className="text-base">
            <ReadMore>{description}</ReadMore>
          </div>
        </div>
      </div>
    </div>
  )

  const Courses = ({ dataCourse }) => {
    return (
      <div>
        <h1 className="md:text-4xl font-bold">Các khóa học đề xuất</h1>
        {dataCourse.map((e) => {
          return (
            <div className="m-10 md:m-0 block md:flex justify-center items-center md:px-3 md:h-[184px] hover:bg-[#CCFFFF] active:bg-[#CCFFFF] focus:outline-none md:my-3 rounded-xl">
              <div className="md:w-[20%] ">
                <img  className="rounded-lg " src={e.thumbnail}></img>
              </div>

              <div className="md:w-[80%] flex-col md:ml-5">
                <div>
                  <span className="rounded-3xl bg-[#ff5c5c29] text-red-600 text-xs py-1 px-3 font-bold">
                    {' '}
                    {e.age} tuổi
                  </span>
                  <p className="font-medium text-xl ">{e.title}</p>
                  <p className="text-sm mt-2">{e.description}</p>
                  <div> rating</div>
                  <p> lượt đăng kích</p>
                </div>
                <h1 className="text-end font-bold md:text-2xl">
                  {formatCash(e.price + '')} đ/Buổi
                </h1>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    courseCategoryDetail && (
      <div className="w-full  md:pt-[117px] md:px-[100px] mx-3 m-5">
        <Introduce
          name={courseCategoryDetail.name}
          description={courseCategoryDetail.description}
          avatar={courseCategoryDetail.avatar}
        />

        <Courses dataCourse={courseCategoryDetail.courses} />
      </div>
    )
  )
}

export default Subject
