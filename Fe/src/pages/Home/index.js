import React ,  {useEffect , useState} from 'react'
import Banner from '../../components/Layout/DefaultLayout/Banner'
import Carousel from '../../components/Layout/components/Carousels'
import LearningCard from '../../components/Layout/components/LearningCard'
import axios from 'axios'
// import { Link } from 'react-router-dom'

function Home() {

  const [videos, setVideos] = useState([])
  console.log('videos', videos);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/videos')
      .then(function (response) {
        // handle success
        setVideos(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  }, [])

  return (
    <div>
      <Banner/>
      <LearningCard/>
      <Carousel data = {videos}/>
    </div>
  )
}

export default Home