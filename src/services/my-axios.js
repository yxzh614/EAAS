import axios from 'axios'
export default {
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
  }
}
axios.defaults.baseURL = 'http://127.0.0.1:8080'
function formToFormData (form) {
  let formData = new FormData()
  for (let e in form) {
    formData.append(e, form[e])
  }
  return formData
}
