import React from 'react'
import VideoDetailc from '../../components/Layout/components/VideoDetail'
import { useParams } from 'react-router'


function VideoDetail() {
const {key} = useParams()
console.log(key)

  return (
    <div><VideoDetailc/></div>
  )
}

export default VideoDetail