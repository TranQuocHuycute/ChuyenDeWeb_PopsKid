import React, {useState} from "react";
import CoursesSlider from "../../components/Layout/Popper/CoursesSlider";
import CoursesItem from "../../components/Layout/components/CoursesItem";
import LearningCartNB from '../../components/Layout/components/LearningCartNB'
import SixReasons from "../../components/Layout/components/SixReasons"
import { ParentsComments } from '../../components/Layout/ParentsComments'
import { CourseSelection } from '../../components/Layout/CourseSelection'
import axios from 'axios'

function Learn() {

  // eslint-disable-next-line no-unused-vars
  const [courses, setFeaturedCourses] = useState([])
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
    <div className=" md:p-24 bg-[#f4f6f8]">
      <CoursesSlider>
        <CoursesItem />
      </CoursesSlider>
      <LearningCartNB/>
      <SixReasons/>
      <CourseSelection />
      <ParentsComments />
    </div>
  );
}

export default Learn;
