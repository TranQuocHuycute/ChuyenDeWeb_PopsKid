import React from "react";
import Categories from "./Categories";
import Videos from "./Videos";
import LearningCartDetail from "../LearningCartDetail";
function VideoDetail() {
  return (
    <div>
      <Videos/>
      <Categories />
      <LearningCartDetail/>
    </div>
  );
}

export default VideoDetail;
