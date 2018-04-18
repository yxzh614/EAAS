import axios from 'axios'
export default {
  baseURL: 'http://192.168.43.189:8080',
  fileBaseURL: 'http://localhost:63342/st/',
  updateMember: '/updatemembers',
  updateNew: '/updatenew',
  getYears () { // 获取共有多少届
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
  },
  getGoodName () {
    return axios.get('/getgoodname')
  },
  moneyLeft () {
    return axios.get('/getmoney')
  },
  newGood (data) {
    return axios.post('/addgood', formToFormData(data))
    // name isXiaoHao type location size
  },
  buyGood (data) {
    return axios.post('/buygood', formToFormData(data))
  },
  deleteGood (data) {
    return axios.post('/deletegood', formToFormData(data))
  },
  borrowGood (data) {
    return axios.post('/borrow', formToFormData(data))
  },
  goodRecords () {
    return axios.get('/goodrecords')
  },
  getCompMessage (params) {
    return axios.get(`/getcommessage?comId=${params}`)
  },
  addTrain (data) {
    return axios.post('addtrain', formToFormData(data))
  },
  goodNeedReturn (data) {
  },
  getTrainList () {
    return axios.get('gettrainslist')
  },
  getTrain (params) {
    return axios.get(`/gettrain?trainId=${params}`)
  },
  getSignList (params) {
    return axios.get(`/qiandaolist?trainId=${params}`)
  },
  getCiYun (params) {
    return axios.get(`/getciyun?trainId=${params}`)
  },
  getMemberByYear (params) {
    return axios.get(`/getthmember?th=${params}`)
  },
  getMemberOwe (params) {
    return axios.get(`/memberowe?memberId=${params}`)
  },
  goodGiveBack (data) {
    return axios.post('/giveback', formToFormData(data))
  },
  getBills () {
    return axios.get('getbills')
  },
  getGrade (params) {
    return axios.get(`/pingfen?th=${params}`)
  },
  downloadMember (params) {
    return axios.get(`/getthexcel?th=${params}`)
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
