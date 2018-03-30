import axios from 'axios'
export default {
  getths () {
    return axios.get('/getths')
  }
}
axios.defaults.baseURL = 'http://127.0.0.1:8080'
