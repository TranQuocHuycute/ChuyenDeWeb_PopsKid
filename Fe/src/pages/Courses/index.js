import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LearningCard from '../../components/Layout/components/LearningCartNB/LearningCard'

function Course() {
  const [courses, setCourses] = useState([])
  console.log('courses', courses)
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/courses')
      .then(function (response) {
        setCourses(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className=" md:p-24 bg-[#f4f6f8]">
      <div className="flex flex-row mb-10">
        <div className=" mr-4 h-9 items-center bg-[#06afc3] w-3 rounded-lg"></div>
        <h1 className="text-4xl font-bold">Khóa học gợi ý</h1>
      </div>

      <div className=" pt-2 flex justify-center align-center items-center pb-2">
        <div className="flex flex-col sm:flex-row">
          {courses.length > 0 &&
            courses.map((e) => {
              return (
                <LearningCard 
                  id={e.id}
                  image={e.thumbnail}
                  title={e.title}
                  age={e.age}
                  description={e.description}
                  price={e.price}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Course
