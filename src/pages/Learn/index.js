import React from "react";
import CoursesSlider from "../../components/Layout/Popper/CoursesSlider";
import CoursesItem from "../../components/Layout/components/CoursesItem";
function Learn() {
  return (
    <div className=" md:p-24 bg-[#f4f6f8]">
      <CoursesSlider>
        <CoursesItem />
      </CoursesSlider>
    </div>
  );
}

export default Learn;
