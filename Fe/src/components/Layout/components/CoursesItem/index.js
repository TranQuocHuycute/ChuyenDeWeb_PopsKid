import React, { useState ,useEffect} from "react";
import { courseList } from "../../../../pages/Learn/data";
import { Link } from "react-router-dom";
import axios from 'axios'

function CoursesItem() {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const [courseCategories, setCourseCategories] = useState([])
  console.log('courseCategories' , courseCategories);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/courses/catalogs')
      .then(function (response) {
        setCourseCategories(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className="p-4 md:w-[908px] h-auto flex rounded-3xl flex-col py-6 md:px-8 z-10  bg-white">
      <h1
        tag="h1"
        className="mt-0 text-xl md:text-4xl font-bold text-center mb-4 text-[#4dbdc8]"
      >
        Các khóa học trực tuyến đa dạng
      </h1>
      <div
        className={`py-3 flex flex-wrap justify-center ${
          isReadMore ? "overflow-hidden max-h-[280px]" : ""
        } md:max-h-full`}
      >
        {courseCategories.length > 0 && courseCategories.map((element, index) => {
          return (
            <Link
              className=" text-center mb-8 mx-4 "
              title=""
              to = {`/subject/${element.id}`}
              key={index}
            >
              <picture className="flex justify-center">
                <img
                  className="border rounded-full p-1 border-[#4dbdc87a]  "
                  width={64}
                  src={element.avatar}
                ></img>
              </picture>

              <p tag="p" className="mt-4 text-xl font-normal ">
                {element.name}
              </p>
            </Link>
          );
        })}
      </div>
      {courseList.length > 4 ? (
        <div
          onClick={toggleReadMore}
          class="flex items-center justify-center py-3 undefined md:hidden"
        >
          <div class="pr-4 font-bold text-[#06afc3] cursor-pointer">
            {isReadMore ? "Xem thêm" : "Thu gọn"}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CoursesItem;