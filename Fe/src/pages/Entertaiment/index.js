import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import Carousel from '../../components/Layout/components/Carousels'
import axios from 'axios'
function Entertaiment() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/videos/categories/name/Entertainment')
      .then(function (response) {
        // handle success
        setVideos(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })

  }, [])

  return (
    <div>
       <Carousel data={videos} />
    </div>
  )
}

export default Entertaiment