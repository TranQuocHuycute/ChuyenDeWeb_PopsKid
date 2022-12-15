import React, { useState } from "react";
import { courseList } from "../../../../pages/Learn/data";

function CoursesItem() {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
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
        {courseList.map((element, index) => {
          return (
            <a
              className=" text-center mb-8 mx-4 "
              title=""
              href="/subject/uu-dai-634545887b72fa0059a2ebce"
              key={index}
            >
              <picture className="flex justify-center">
                <img
                  className="border rounded-full p-1 border-[#4dbdc87a]  "
                  width={64}
                  src={element.img}
                ></img>
              </picture>

              <p tag="p" className="mt-4 text-xl font-normal ">
                Học Thử ada
              </p>
            </a>
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
