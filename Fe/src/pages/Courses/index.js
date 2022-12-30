import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Course() {

    const [courses, setCourses] = useState([])
    console.log('courses' , courses);
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
    <div>Course</div>
  )
}

export default Course