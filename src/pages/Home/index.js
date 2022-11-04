import React from 'react'
import Banner from '../../components/Layout/DefaultLayout/Banner'
import Carousel from '../../components/Layout/components/Carousel'
import LearningCard from '../../components/Layout/components/LearningCard'

function Home() {
  return (
    <div>
      <Banner/>
      <LearningCard/>
      <Carousel/>
    </div>
  )
}

export default Home