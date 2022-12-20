import axios from 'axios'
const VIDEO_BASE_REST_API_URL = 'http://localhost:8080/api/videos'

export default class VideoService {
  static getVideos() {
    return axios.get(VIDEO_BASE_REST_API_URL)
  }
}
