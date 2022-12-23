import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Subject() {
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

  const Introduce = () => (
    <div>
      <div class="md:mt-3 mt-14 mb-3 ">
        <Link class=" text-[#06afc3] capitalize text-lg" to="/learn">
          Khám phá<span class="mx-1 text-gray-default">/</span>
        </Link>
        <span class="text-gray-400 text-lg">Ảo Thuật</span>
      </div>
      <div className="md:bg-gray-100  block md:flex md:flex-wrap md:rounded-2xl md:text-xs md:px-12 md:py-8 md:mb-3 md:mt-8">
        <div className="w-[20%] ">
          <img
            className="rounded-full border-[#06afc3] border-2"
            src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/art__2_-9256575efe84-1669972021387-utqK7HbM.png?v=0&maxW=160&format=webp"
            width="160px"
            height="160px"
          ></img>
        </div>
        <div className="w-[80%]">
          <h1 className="font-medium  text-xl md:text-3xl mt-2 mb-2">Vẽ</h1>
          <div className="text-base">
            <ReadMore>
              Mỗi đứa trẻ đều mang trong mình bản năng của một người họa sĩ với
              con mắt nhìn thế giới vô cùng sống động, đầy màu sắc và trí tưởng
              tượng phong phú vô hạn. sẽ giúp trẻ đưa thế giới của mình lên
              những bức tranh, thể hiện ý tưởng và tài hoa của chính mình. Mỗi
              đứa trẻ đều mang trong mình bản năng của một người họa sĩ với con
              mắt nhìn thế giới vô cùng sống động, đầy màu sắc và trí tưởng
              tượng phong phú vô hạn. sẽ giúp trẻ đưa thế giới của mình lên
              những bức tranh, thể hiện ý tưởng và tài hoa của chính mình. Mỗi
              đứa trẻ đều mang trong mình bản năng của một người họa sĩ với con
              mắt nhìn thế giới vô cùng sống động, đầy màu sắc và trí tưởng
              tượng phong phú vô hạn. sẽ giúp trẻ đưa thế giới của mình lên
              những bức tranh, thể hiện ý tưởng và tài hoa của chính mình. Mỗi
              đứa trẻ đều mang trong mình bản năng của một người họa sĩ với con
              mắt nhìn thế giới vô cùng sống động, đầy màu sắc và trí tưởng
              tượng phong phú vô hạn. sẽ giúp trẻ đưa thế giới của mình lên
              những bức tranh, thể hiện ý tưởng và tài hoa của chính mình.
            </ReadMore>
          </div>
        </div>
      </div>
    </div>
  )

  const Courses = () => {
    return (
      <div>
        <h1 className="text-4xl font-bold">Các khóa học đề xuất</h1>
        <div className="flex-row items-center md:h-[184px] hover:bg-[#CCFFFF] active:bg-[#CCFFFF] focus:outline-none  md:my-3 rounded-xl">
          <div className="md:w-20% bg-black flex-col items-center">
            <img
              className="rounded-lg"
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/ho_c_to__t_mo_n_toa_n_cu_ng_co__ho__ng_nhung__4_-72fab0b42655-1666082706255-QApupaac.png?v=0&maxW=320&format=webp"
              width="230px"
              height="152px"
            ></img>
          </div>
          <div className="md:w-80%"></div>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full  md:pt-[117px] md:px-[100px] mx-3">
      <Introduce />
      <Courses />
    </div>
  )
}

export default Subject
