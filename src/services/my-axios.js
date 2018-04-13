import axios from 'axios'
export default {
  baseURL: 'http://192.168.43.189:8080',
  fileBaseURL: 'https://localhost:63342/st/',
  getYears () {
    return axios.get('/getths')
  },
  getAllComp () {
    return axios.get('/getallcompetations')
  },
  newComp (data) {
    return axios.post('/addcompetation', formToFormData(data))
  },
  login (data) {
    return axios.post('/checkadminpassword', formToFormData(data))
  },
  newMoney (data) {
    return axios.post('/addbill', formToFormData(data))
  },
  getGoods () {
    return axios.get('/getgoods')
  }
}
axios.defaults.baseURL = 'http://192.168.43.189:8080'
function formToFormData (form) {
  let formData = new FormData()
  for (let e in form) {
    formData.append(e, form[e])
  }
  return formData
}
