import React from "react";
import Categories from "./Categories";
import Videos from "./Videos";
import LearningCartDetail from "../LearningCartDetail";
import RegisterCourse from '../RegisterCourse';
function VideoDetail() {
  return (
    <div>
      <Videos/>
      <Categories />
      <LearningCartDetail/>
      <RegisterCourse/>
    </div>
  );
}

export default VideoDetail;
