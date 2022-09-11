import axios from 'axios'

// Http Request 와 Response 관련 기본 설정
const config = {
    baseUrl: 'https://ghibliapi.herokuapp.com'
}

// 함수 설정
function fetchApi() {
   return axios.get(`${config.baseUrl}/films`)
}

// 함수 설정
function fetchApiItem(_id) {
    return axios.get(`${config.baseUrl}/films/${_id}`)
 }

export { fetchApi, fetchApiItem }