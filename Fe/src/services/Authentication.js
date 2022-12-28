import axios from 'axios'
import Cookies from 'js-cookie'
const LOGIN_REST_API_URL = 'http://localhost:8080/api/auth/login'
const REGISTER_REST_API_URL = 'http://localhost:8080/api/auth/register'
import qs from 'qs'
export default class Authentication {
  static login(username, password) {
    const data = { username: username, password: password }
    const options = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify(data),
      url: LOGIN_REST_API_URL,
    }
    return axios(options)
      .then((res) => {
        if (res.data.access_token) {
          Cookies.set('authToken', res.data.access_token)
        }
        return res.data.access_token
      })
      .catch((err) => {
        console.log(err)
      })
  }
  static logout() {
    Cookies.remove('authToken')
  }

  static register(username, password, name) {
    console.log({ username, password, name })
    return axios
      .post(
        REGISTER_REST_API_URL,
        {
          name: name ? name : username,
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + Cookies.get('authToken'),
          },
        }
      )
      .then((res) => {
        console.log(res)
        window.location.href = '/login'
      })
  }
}
