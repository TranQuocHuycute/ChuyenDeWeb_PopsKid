import axios from 'axios'
import Cookies from 'js-cookie'

const VIDEO_BASE_REST_API_URL = 'http://localhost:8080/api/videos'
const TYPE_BASE_REST_API_URL = 'http://localhost:8080/api/types'
const CATEGORY_BASE_REST_API_URL = 'http://localhost:8080/api/categories'
const COUNTRY_BASE_REST_API_URL = 'http://localhost:8080/api/countries'
const ADD_VIDEO_REST_API_URL = 'http://localhost:8080/api/videos/add'

export default class VideoService {
  static getVideos() {
    return axios.get(VIDEO_BASE_REST_API_URL)
  }

  static getVideoById(id) {
    const GET_VIDEO_REST_API_URL = `http://localhost:8080/api/videos/${id}`

    return axios.get(GET_VIDEO_REST_API_URL)
  }

  static getTypes() {
    return axios.get(TYPE_BASE_REST_API_URL)
  }

  static getCategories() {
    return axios.get(CATEGORY_BASE_REST_API_URL)
  }

  static getCountries() {
    return axios.get(COUNTRY_BASE_REST_API_URL)
  }

  static addVideo(video) {
    return axios
      .post(ADD_VIDEO_REST_API_URL, video, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + Cookies.get('authToken'),
        },
      })
      .then((res) => res.data)
  }

  static updateVideo(id, video) {
    console.log({ id, video })
    const UPDATE_VIDEO_REST_API_URL = `http://localhost:8080/api/videos/update/${id}`

    axios
      .put(UPDATE_VIDEO_REST_API_URL, video, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + Cookies.get('authToken'),
        },
      })
      .then(() => {
        window.location.href = '/dashboard/videos'
      })
  }

  static addType(id, type) {
    const ADD_TYPE_REST_API_URL = `http://localhost:8080/api/videos/${id}/type`

    axios.post(ADD_TYPE_REST_API_URL, type, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Cookies.get('authToken'),
      },
    })
  }

  static addCategory(id, category) {
    const ADD_CATEGORY_REST_API_URL = `http://localhost:8080/api/videos/${id}/category`

    axios.post(ADD_CATEGORY_REST_API_URL, category, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Cookies.get('authToken'),
      },
    })
  }

  static addCountry(id, country) {
    const ADD_COUNTRY_REST_API_URL = `http://localhost:8080/api/videos/${id}/country`

    axios.post(ADD_COUNTRY_REST_API_URL, country, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Cookies.get('authToken'),
      },
    })
  }

  static deleteVideo(id) {
    const DELETE_VIDEO_REST_API_URL = `http://localhost:8080/api/videos/delete/${id}`

    axios
      .delete(DELETE_VIDEO_REST_API_URL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + Cookies.get('authToken'),
        },
      })
      .then(() => {
        window.location.reload()
      })
  }
}
