import React from "react";
import CoursesSlider from "../../components/Layout/Popper/CoursesSlider";
import CoursesItem from "../../components/Layout/components/CoursesItem";
import LearningCartNB from '../../components/Layout/components/LearningCartNB'
import SixReasons from "../../components/Layout/components/SixReasons"
function Learn() {
  return (
    <div className=" md:p-24 bg-[#f4f6f8]">
      <CoursesSlider>
        <CoursesItem />
      </CoursesSlider>
      <LearningCartNB/>
      <SixReasons/>
    </div>
  );
}

export default Learn;
